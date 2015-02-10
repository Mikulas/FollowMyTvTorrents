var titleEl = document.querySelector("h2");
var titleMatches = titleEl.innerText.match(/^(.+) Season ([0-9]+)$/);
var showName = titleMatches[1];
var seasonNr = titleMatches[2];

var showDocumentLoadCallbacks = [];
var loadingShowDocument = false;
var loadedShowDocument;

var episodesEls = document.querySelectorAll(".split-content .item-teaser");
_.each(episodesEls, function(episodeEl) {
  var labelsEl = episodeEl.querySelector(".info .labels");
  if (labelsEl.children.length > 0) return;

  var episodeId = episodeEl.querySelector(".info .epinr").innerText;
  var episodeNrs = episodeId.split("x");
  var episodeNr = parseInt(episodeNrs[1]);

  TPB.getDownloadLink(showName, seasonNr, episodeNr, function(link) {
    if (!link) return;

    var listItemEl = document.createElement("li");
    listItemEl.className = "download"

    var linkEl = document.createElement("a");
    linkEl.target     = "_blank";
    linkEl.href       = link;
    linkEl.innerText  = "download";
    listItemEl.appendChild(linkEl);
    labelsEl.appendChild(listItemEl);
  });
});
