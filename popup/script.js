const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {};
  [...form.elements].slice(0, -1).forEach((el) => {
    formData[el.name] = el.checked;
  });

  chrome.storage.sync.set(formData);
});

[...form.elements].slice(0, -1).forEach((el) => {
  chrome.storage.sync.get(el.name, (res) => {
    el.checked = res[el.name];
  });
});
