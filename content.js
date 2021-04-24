chrome.storage.sync.get("comments", ({ comments }) => {
  if (comments) {
    document.body.classList.add("ofb-enabled-comments");
  }
});

chrome.storage.sync.get("ratings", ({ ratings }) => {
  if (ratings) {
    document.body.classList.add("ofb-enabled-ratings");
  }
});

chrome.storage.sync.get("views", ({ views }) => {
  if (views) {
    document.body.classList.add("ofb-enabled-views");
  }
});

chrome.storage.sync.get("subscribers", ({ subscribers }) => {
  if (subscribers) {
    document.body.classList.add("ofb-enabled-subscribers");
  }
});
