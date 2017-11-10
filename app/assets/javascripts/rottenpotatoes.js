RP = {
    setup: function() {
      // add invisible 'div' to end of page:
      $('<div id="movieInfo"></div>').
        hide().
        appendTo($('body'));
      $('#movies a').click(RP.getMovieInfo);
    },
        
    getMovieInfo: function() {
      $.ajax({type: 'GET',
        dataType: 'json',
        url: $(this).attr('href'),
        success: RP.showMovieInfo,
        timeout: 5000,
        error: function(xhrObj, textStatus, exception) {alert('Error!');}
        // 'timeout' and 'error' functions omitted for brevity
      });
      return(false);
    },

    showMovieInfo: function(jsonData, requestStatus, xhrObject) {
      // center a floater 1/2 as wide and 1/4 as tall as screen
      var oneFourth = Math.ceil($(window).width() / 4);
      $('#movieInfo').css({'left': oneFourth,  'width': 2*oneFourth, 'top': 250}).
        append($('<p>' + 'Title: '+jsonData.title  + '</p>')).
        append($('<p>' + 'Rating: '+jsonData.rating  + '</p>')).
        append($('<p>' + 'Release date: '+jsonData.release_date  + '</p>')).
        append($('<p>' + 'Description: '+jsonData.description  + '</p>')).
        append($('<a id="closeLink" href="#">Close</a>')).show();
      // make the Close link in the hidden element work (and change its label to 'Close')
      $('#closeLink').click(RP.hideMovieInfo);
      return(false);  // prevent default link action
    },
   
    hideMovieInfo: function() {
      $('#movieInfo').html('')       
      $('#movieInfo').hide();
      return(false);
    }
}
$(RP.setup);
    
