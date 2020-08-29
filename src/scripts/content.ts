function grabPosterElements() {
  let movieElem = document.querySelectorAll(
    ".react-component.film-poster.poster"
  );

  let filmId = movieElem[0]?.getAttribute("data-film-id");

  chrome.runtime.sendMessage({ filmId });
}

function onLoad() {
  grabPosterElements();
}

window.addEventListener("load", () => {
  onLoad();
});

const createNotificationElement = (streamInfo) => {
  const streamElem = document.createElement("div");
  streamElem.className = "stream-info";
  const netflixLogo = chrome.runtime.getURL("css/netflix.png");
  const watchIcon = chrome.runtime.getURL("css/watch.svg");

  const domString = `<img class="netflix-logo" src="${netflixLogo}" alt="netflix-logo" />
  <h4 class="header">Netflix ${streamInfo.format?.toUpperCase()} (${
    streamInfo.locale
  })</h4>
  <a href="${
    streamInfo.viewUrl
  }" target="_blank"><img class="watch" src="${watchIcon}" alt="watch" /></a>`;

  streamElem.innerHTML = domString;
  document.body.appendChild(streamElem);
};

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === "streamInfo") {
    createNotificationElement(request.streamInfo);
  }
});
