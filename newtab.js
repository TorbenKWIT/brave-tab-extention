chrome.storage.sync.get({ url: DEFAULT_URL }, ({ url }) => {
  // replace() keeps the blank extension page out of the tab's back history.
  location.replace(url);
});
