const hide = {
  comments: true,
  ratings: true,
  views: true,
  subscribers: true,
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set(hide);
  console.log("Extension Setup.");
});
