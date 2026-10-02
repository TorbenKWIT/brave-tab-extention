const input = document.getElementById("url");
const status = document.getElementById("status");

chrome.storage.sync.get({ url: DEFAULT_URL }, ({ url }) => {
  input.value = url;
});

document.getElementById("save").addEventListener("click", () => {
  let url = input.value.trim();
  if (!url) url = DEFAULT_URL;
  if (!/^[a-z][a-z0-9+.-]*:/i.test(url)) url = "https://" + url;

  try {
    new URL(url);
  } catch {
    status.style.color = "red";
    status.textContent = "Invalid URL";
    return;
  }

  chrome.storage.sync.set({ url }, () => {
    input.value = url;
    status.style.color = "green";
    status.textContent = "Saved!";
    setTimeout(() => (status.textContent = ""), 1500);
  });
});
