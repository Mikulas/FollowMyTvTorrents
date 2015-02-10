var TPB = {
  getDownloadLink: function(showName, seasonNr, episodeNr, callback) {
    var pad = function(num) {
      return ('00' + num).substr(-2);
    }

    var query = showName + " " + "s" + pad(seasonNr) + "e" + pad(episodeNr);
    var link = "https://thepiratebay.se/search/" + encodeURIComponent(query) + "/0/99/208"

    callback(link);
  }
}
