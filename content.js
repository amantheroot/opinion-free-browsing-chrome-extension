const update = () => {
  // Toggle Comments
  chrome.storage.sync.get("comments", ({ comments }) => {
    if (comments) {
      document.body.classList.add("ofb-enabled-comments");
    } else {
      document.body.classList.remove("ofb-enabled-comments");
    }
  });

  // Toggle Ratings
  chrome.storage.sync.get("ratings", ({ ratings }) => {
    if (ratings) {
      document.body.classList.add("ofb-enabled-ratings");
    } else {
      document.body.classList.remove("ofb-enabled-ratings");
    }
  });

  // Toggle Views
  chrome.storage.sync.get("views", ({ views }) => {
    if (views) {
      document.body.classList.add("ofb-enabled-views");
    } else {
      document.body.classList.remove("ofb-enabled-views");
    }
  });

  // Toggle Subscribers
  chrome.storage.sync.get("subscribers", ({ subscribers }) => {
    if (subscribers) {
      document.body.classList.add("ofb-enabled-subscribers");
    } else {
      document.body.classList.remove("ofb-enabled-subscribers");
    }
  });
};

chrome.runtime.onMessage.addListener(({ message }) => {
  if (message === "update") {
    update();
  }
});

update();
