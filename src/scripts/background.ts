const API_URL = "https://letterboxd.com/s/film-availability?";
// const locale = chrome.storage && chrome.storage.sync.get;

async function fetchMovieAvailabilityInfo(filmId, locale) {
  const res = await fetch(`${API_URL}filmId=${filmId}&locale=${locale}`);
  return res.json();
}

const notifyContentAboutAvailableStream = (streamInfo) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: "streamInfo",
      streamInfo,
    });
  });
};

chrome.runtime.onMessage.addListener(async (message) => {
  if (message && message?.filmId) {
    chrome.storage &&
      chrome.storage.sync.get({ locale: "USA" }, async (result) => {
        const response = await fetchMovieAvailabilityInfo(
          message?.filmId,
          result.locale
        );
        if (response?.best?.stream?.length > 0) {
          const availableStream = response?.best?.stream?.filter(
            (eachOption) => eachOption?.name === "Netflix"
          );
          if (availableStream?.length > 0) {
            notifyContentAboutAvailableStream(availableStream[0]);
          }
        }
      });
  }
});
