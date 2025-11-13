console.log('Zen Mode loaded');

function hideMetrics() {
  chrome.storage.sync.get({
    hideLikes: true,
    hideRetweets: true,
    hideReplies: true,
    hideViews: true
  }, (settings) => {
    
    if (settings.hideLikes) {
      document.querySelectorAll('[data-testid="like"] span').forEach(el => {
        if (el.textContent.match(/\d/)) el.style.visibility = 'hidden';
      });
    }
    
    if (settings.hideRetweets) {
      document.querySelectorAll('[data-testid="retweet"] span').forEach(el => {
        if (el.textContent.match(/\d/)) el.style.visibility = 'hidden';
      });
    }
    
    if (settings.hideReplies) {
      document.querySelectorAll('[data-testid="reply"] span').forEach(el => {
        if (el.textContent.match(/\d/)) el.style.visibility = 'hidden';
      });
    }
    
    if (settings.hideViews) {
      document.querySelectorAll('a[href*="/analytics"]').forEach(link => {
        link.style.visibility = 'hidden';
      });
    }
  });
}

setInterval(hideMetrics, 1000);

chrome.storage.onChanged.addListener(() => {
  hideMetrics();
});
