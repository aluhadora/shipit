var $ = require('jquery');

export function pullTracks (callback, user) {
    if (!user) {
      callback({error: true, message: 'Enter a user', hideDisplay: true});
      return;
    }
  
    var url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks' +
     '&user=' + user + '&api_key=' + '888f48f85285e39075b7e1a461863d81' + '&format=json&limit=25';
  
     $.ajax({
       method: 'Get',
       url: url,
     }).done(data => {
       if (!data.recenttracks) return callback(data);
       for (var i = 0; i < data.recenttracks.track.length; i++) {
         var track = data.recenttracks.track[i];
         track.img = imgLinkFromTrack(track);
         track.album = track.album['#text'];
         track.artist = track.artist['#text'];
       }
  
       callback(data);
     });
  }
  
  function imgLink(track) {
    var fromTrack = imgLinkFromTrack(track);
    if (fromTrack) return fromTrack;
  
    return fromTrack;
  }
  
  function imgLinkFromTrack(track) {
    if (!track || !track.image || !track.image.length) return '';
  
    if (track.image.length > 2) return track.image[2]['#text'];
  
    return track.image[track.image.length - 1]['#text'];
  }