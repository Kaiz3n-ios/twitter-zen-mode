const checkboxes = ['hideLikes', 'hideRetweets', 'hideReplies', 'hideViews'];

// Load saved settings
chrome.storage.sync.get(checkboxes.reduce((acc, key) => ({ ...acc, [key]: true }), {}), (settings) => {
  checkboxes.forEach(id => {
    document.getElementById(id).checked = settings[id];
  });
});

// Save on change
checkboxes.forEach(id => {
  document.getElementById(id).addEventListener('change', (e) => {
    chrome.storage.sync.set({ [id]: e.target.checked });
  });
});