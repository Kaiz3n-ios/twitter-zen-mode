const ids = ['hideLikes', 'hideRetweets', 'hideReplies', 'hideViews'];

// Load current settings
chrome.storage.sync.get(null, (data) => {
  ids.forEach(id => {
    const checkbox = document.getElementById(id);
    checkbox.checked = data[id] !== false; // default true
    
    // Listen for changes
    checkbox.addEventListener('change', (e) => {
      const obj = {};
      obj[id] = e.target.checked;
      chrome.storage.sync.set(obj, () => {
        console.log('Saved:', id, '=', e.target.checked);
      });
    });
  });
});