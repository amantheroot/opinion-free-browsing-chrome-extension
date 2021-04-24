const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get Data
  const formData = {};
  [...form.elements].slice(0, -1).forEach((el) => {
    formData[el.name] = el.checked;
  });

  // Store Data
  chrome.storage.sync.set(formData);

  // Update Current Tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { message: "update" });
  });
});

// Initialize Inputs
[...form.elements].slice(0, -1).forEach((el) => {
  chrome.storage.sync.get(el.name, (res) => {
    el.checked = res[el.name];
  });
});
