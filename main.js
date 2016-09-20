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
    <tr><td style="font-weight: bold;">Album:</td><td>${track.album}</td></tr>
    <tr><td style="font-weight: bold;">Subject:</td><td>${track.subject}</td></tr>
    <tr><td style="font-weight: bold;">Date:</td><td>${dateFormatter(track.date.getTime())}</td></tr>
    <tr><td style="font-weight: bold;">Wiki:</td><td><a href="${track.wiki}">${track.wiki}</td></tr>
    </table>`;
}

function dateFormatter(value, axis) {
  return (new Date(value)).toLocaleDateString({ year: 'numeric', month: 'numeric', day: 'numeric' });
}

let albums = contents.albums.map(album => album.name);

function albumFormatter(value, axis) {
  return albums[value] || '';
}

function drawPlot(tracks) {
  let points = tracks.map(track => [track.date.getTime(), albums.indexOf(track.album), track]);
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
      panRange: [(new Date('-000500-01-01')).getTime(), (new Date('2100-01-01')).getTime()],
      tickFormatter: dateFormatter
    },
    yaxis: {
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
    'background-color': '#fee',
    opacity: 0.80
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
      $('#songInfo').html(renderTrack(track));
    }
  });

}

$(document).ready(() => {
  Promise.resolve(contents)
    .then(json => json.albums)
    .then(albums => {
      return albums.map(album => {
        if (!album || !album.tracks) {
          return;
        }
        album.tracks = album.tracks.map(track => {
          if (!track) {
            return;
          }
          track.album = album.name;
          return track;
        });
        return album;
      });
    })
    .then(albums => albums.filter(album => album))
    .then(albums => albums.map(album => album.tracks))
    .then(albums => albums.flatten())
    .then(tracks => tracks.filter(track => track && track.date))
    .then(drawPlot)
    .catch(console.error);
});
