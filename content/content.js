console.log('Zen Mode loaded');

function applySettings() {
  chrome.storage.sync.get({
    hideLikes: true,
    hideRetweets: true,
    hideReplies: true,
    hideViews: true
  }, (settings) => {
    console.log('Settings:', settings);
    
    document.querySelectorAll('[data-testid="like"] span').forEach(el => {
      if (el.textContent.match(/\d/)) {
        el.style.visibility = settings.hideLikes ? 'hidden' : 'visible';
      }
    });
    
    document.querySelectorAll('[data-testid="retweet"] span').forEach(el => {
      if (el.textContent.match(/\d/)) {
        el.style.visibility = settings.hideRetweets ? 'hidden' : 'visible';
      }
    });
    
    document.querySelectorAll('[data-testid="reply"] span').forEach(el => {
      if (el.textContent.match(/\d/)) {
        el.style.visibility = settings.hideReplies ? 'hidden' : 'visible';
      }
    });
    
    document.querySelectorAll('a[href*="/analytics"]').forEach(link => {
      link.style.visibility = settings.hideViews ? 'hidden' : 'visible';
    });
  });
}

setTimeout(applySettings, 2000);
setInterval(applySettings, 3000);

chrome.storage.onChanged.addListener(applySettings);
