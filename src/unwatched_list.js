var updateEpisodeEls = function() {
  var wrapper = document.querySelector(".markify");
  
  var pastEpisodesEls = wrapper.querySelectorAll(".row > .row-inner:not(.empty):not(.future):not(.tomorrow)");
  _.each(pastEpisodesEls, function(pastEpisodeEl) {
    var showName = pastEpisodeEl.querySelector(".show-name a").innerText;
    var episodeId = pastEpisodeEl.querySelector(".episode-nr-wrapper .episode-nr").innerText;
    var episodeNrs = episodeId.split("x");

    TPB.getDownloadLink(showName, parseInt(episodeNrs[0]), parseInt(episodeNrs[1]), function(link) {
      if (!link) return;

      var actionsList = pastEpisodeEl.querySelector("ul.actions");

      var listItemEl = document.createElement("li");

      var linkEl = document.createElement("a");
      linkEl.className  = "watched";
      linkEl.target     = "_blank";
      linkEl.href       = link;
      linkEl.innerText  = "Download";
      listItemEl.appendChild(linkEl);
      actionsList.insertBefore(listItemEl, actionsList.firstChild);
    });
  });
}

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes.length > 0) {
      var wrapper = mutation.addedNodes[0];

      updateEpisodeEls();
    }
  });    
});
observer.observe(document.querySelector(".markify"), { childList: true });

updateEpisodeEls();
