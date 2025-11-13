console.log('Zen Mode loaded');

function hideMetrics() {
  // Hide like/retweet/reply counts
  document.querySelectorAll('[data-testid="like"] span, [data-testid="retweet"] span, [data-testid="reply"] span').forEach(el => {
    if (el.textContent.match(/\d/)) {
      el.style.visibility = 'hidden';
    }
  });
  
  // Hide view counts (analytics links)
  document.querySelectorAll('a[href*="/analytics"]').forEach(link => {
    link.style.visibility = 'hidden';
  });
}

setInterval(hideMetrics, 1000);
