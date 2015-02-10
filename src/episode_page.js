var titleEl = document.querySelector("h2");
var showName = titleEl.querySelector("a").innerText;
var episodeNrMatches = titleEl.querySelector("span.episode").innerText.match(/([0-9]+)x([0-9]+)/);

TPB.getDownloadLink(showName, parseInt(episodeNrMatches[1]), parseInt(episodeNrMatches[2]), function(link) {
  if (!link) return;
  
  var infoListEl = document.querySelector("ul.info-list");

  var lastListItemEl = infoListEl.querySelector("li:last-child");
  var valueEl = lastListItemEl.querySelector("span.value");

  var commaTextNode = document.createTextNode(", ");
  valueEl.replaceChild(commaTextNode, valueEl.querySelectorAll("a")[0].nextSibling);

  var andTextNode = document.createTextNode(" and ");
  valueEl.appendChild(andTextNode);

  var showLinkEl = document.createElement("a");
  showLinkEl.target     = "_blank";
  showLinkEl.href       = link;
  showLinkEl.innerText  = "KickassTorrents";
  valueEl.appendChild(showLinkEl);
});
