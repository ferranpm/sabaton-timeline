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
    <tr><td style="font-weight: bold;">Name:</td><td>${track.name}</td></tr>
    <tr><td style="font-weight: bold;">Album:</td><td>${track.album.name}</td></tr>
    <tr><td style="font-weight: bold;">Subject:</td><td>${track.subject}</td></tr>
    <tr><td style="font-weight: bold;">Date:</td><td>${dateFormatter(track.date)}</td></tr>
    <tr><td style="font-weight: bold;">Wiki:</td><td><a href="${track.wiki}">${track.wiki}</td></tr>
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
});

function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 0, lng: 0 },
    zoom: 2
  });

  let tracks = songs.filter(song => song.position);

  tracks.forEach(track => {
    let marker = new google.maps.Marker({
      position: track.position,
      map: map,
      title: track.name
    });
    marker.addListener('click', setSongInfo.bind(null, track));
  });
}
