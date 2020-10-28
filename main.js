'use strict';

if (!Array.prototype.flatten) {
  Array.prototype.flatten = function() {
    let flattened = [];
    this.forEach(item => {
      if (item && item.constructor === Array) {
        flattened = Array.prototype.concat.apply(flattened, item);
      } else {
        flattened.push(item);
      }
    });
    return flattened;
  };
}

function renderTrack(track) {
  return `<table>
    <tr><th>Name:</th><td>${track.name}</td></tr>
    <tr><th>Album:</th><td>${track.album.name}</td></tr>
    <tr><th>Subject:</th><td>${track.subject}</td></tr>
    <tr><th>Date:</th><td>${dateFormatter(track.date)}</td></tr>
    <tr><th>Wiki:</th><td><a href="${track.wiki}">${track.wiki}</td></tr>
    </table>`;
}

function dateFormatter(value, axis) {
  let options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  if (value && value.constructor === Date) value.toLocaleDateString(options);
  return (new Date(value)).toLocaleDateString(options);
}

let albums = contents.albums.map(album => album.name);

function albumFormatter(value, axis) {
  return albums[value] || '';
}

function drawPlot(tracks) {
  let points = tracks.map(track => [track.date.getTime(), albums.indexOf(track.album.name), track]);
  let placeholder = $('#placeholder');
  let plot = $.plot(placeholder, [points], {
    series: {
      points: { show: true },
      lines: { show: false },
      shadowSize: 0
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    xaxis: {
      min: (new Date('-000500-01-01')).getTime(),
      max: (new Date('2100-01-01')).getTime(),
      panRange: [(new Date('-000500-01-01')).getTime(), (new Date('2100-01-01')).getTime()],
      tickFormatter: dateFormatter
    },
    yaxis: {
      min: -1,
      max: albums.length,
      zoomRange: false,
      panRange: [-1, albums.length],
      show: true,
      tickFormatter: albumFormatter
    },
    zoom: { interactive: true },
    pan: { interactive: true }
  });

  $('<div id=\'tooltip\'></div>').css({
    position: 'absolute',
    display: 'none',
    border: '1px solid #fdd',
    padding: '2px',
    'background-color': '#fafafa',
    opacity: 0.6
  }).appendTo('body');

  placeholder.bind('plothover', function(event, pos, item) {
    if (item) {
      $('#tooltip').html(renderTrack(tracks[item.dataIndex]))
        .css({ top: item.pageY + 5, left: item.pageX + 5 })
        .fadeIn(200);
    } else {
      $('#tooltip').hide();
    }
  });

  placeholder.bind('plotclick', function(event, pos, item) {
    if (item) {
      let track = tracks[item.dataIndex];
      setSongInfo(track);
    }
  });

}

function setSongInfo(track) {
  $('#songInfo').html(renderTrack(track));
}

let songs = parseDiscography(contents);

function parseDiscography(discography) {

  // Put album info in track objects
  let albums = discography.albums.map(album => {
    if (!album || !album.tracks) {
      return;
    }
    album.tracks = album.tracks.map(track => {
      if (!track) {
        return;
      }
      track.album = album;
      return track;
    });
    return album;
  });

  return albums
    .filter(album => album)
    .map(album => album.tracks)
    .flatten();
}

$(document).ready(() => {
  drawPlot(songs.filter(track => track.date));
  initMap();
});

function createPopup(feature) {
  const map = feature.layer.map;
  feature.popup = new OpenLayers.Popup.FramedCloud(
    "pop",
    feature.geometry.getBounds().getCenterLonLat(),
    null,
    feature.attributes.html,
    null,
    true
  );
  map.addPopup(feature.popup);
}

function destroyPopup(feature) {
  feature.popup.destroy();
  feature.popup = null;
}

function initMap() {
  let tracks = songs.filter(song => song.position);

  const map = new OpenLayers.Map("map");
  map.addLayer(new OpenLayers.Layer.OSM());

  const epsg4326 =  new OpenLayers.Projection("EPSG:4326"); // WGS 1984 projection
  const projectTo = map.getProjectionObject(); // The map projection (Spherical Mercator)

  const lonLat = new OpenLayers.LonLat(25, 40).transform(epsg4326, projectTo);
  const zoom = 3;
  map.setCenter(lonLat, zoom);

  const vectorLayer = new OpenLayers.Layer.Vector("Overlay");

  const markerHeight = 879/30;
  const markerWidth = 586/30;
  const markerProps = {
    externalGraphic: 'img/marker.png',
    graphicWidth: markerWidth,
    graphicHeight: markerHeight,
    graphicXOffset: -markerWidth/2,
    graphicYOffset: -markerHeight
  };

  tracks.forEach(track => {
    const feature = new OpenLayers.Feature.Vector(
      new OpenLayers.Geometry.Point(track.position.lng, track.position.lat).transform(epsg4326, projectTo),
      { html: renderTrack(track) },
      markerProps
    );
    vectorLayer.addFeatures(feature);
  });
  map.addLayer(vectorLayer);

  const controls = {
    selector: new OpenLayers.Control.SelectFeature(vectorLayer, { onSelect: createPopup, onUnselect: destroyPopup })
  };

  map.addControl(controls['selector']);
  controls.selector.activate();
}
