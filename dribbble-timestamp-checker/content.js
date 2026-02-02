// Content script for Dribbble Timestamp Checker

console.log('🎨 Dribbble Timestamp Checker: Extension loaded!');

function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };
  
  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
    }
  }
  
  return 'just now';
}

function extractUploadDateFromSchema() {
  // Find the JSON-LD script tag
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  
  console.log(`🔍 Found ${scripts.length} JSON-LD script tags`);
  
  for (const script of scripts) {
    try {
      console.log('📄 Parsing JSON-LD script...');
      const data = JSON.parse(script.textContent);
      
      console.log('📦 Parsed data:', data);
      
      // Handle both single objects and arrays
      const items = Array.isArray(data) ? data : [data];
      
      console.log(`🔍 Checking ${items.length} items for uploadDate`);
      
      for (const item of items) {
        // Look for uploadDate in VideoObject or ImageObject
        if (item.uploadDate) {
          console.log('✅ Found uploadDate:', item.uploadDate);
          return item.uploadDate;
        }
      }
    } catch (e) {
      console.error('❌ Error parsing JSON-LD:', e);
    }
  }
  
  console.log('❌ No uploadDate found in any JSON-LD script');
  return null;
}

function displayTimestamp() {
  console.log('🎯 displayTimestamp() called');
  
  // Check if we've already added a timestamp
  if (document.querySelector('.timestamp-checker-display')) {
    console.log('⏭️ Timestamp already displayed');
    return;
  }
  
  const uploadDate = extractUploadDateFromSchema();
  
  if (!uploadDate) {
    console.log('❌ No uploadDate found in page');
    return;
  }
  
  console.log('✅ Upload date extracted:', uploadDate);
  
  // Create the timestamp display
  const timestampDiv = document.createElement('div');
  timestampDiv.className = 'timestamp-checker-display';
  
  const date = new Date(uploadDate);
  const timeAgo = formatTimeAgo(uploadDate);
  const fullDate = date.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  console.log('⏰ Formatted time ago:', timeAgo);
  console.log('📅 Formatted full date:', fullDate);
  
  timestampDiv.innerHTML = `
    <div class="timestamp-checker-header">📅 Upload Date</div>
    <div class="timestamp-checker-ago">${timeAgo}</div>
    <div class="timestamp-checker-full">${fullDate}</div>
  `;
  
  console.log('📦 Created timestamp div:', timestampDiv);
  
  // Find a good place to insert it
  // Try multiple possible locations for the shot info area
  const possibleContainers = [
    document.querySelector('.shot-header'),
    document.querySelector('.shot-info'),
    document.querySelector('.shot-details'),
    document.querySelector('.shot-byline'),
    document.querySelector('[class*="shot-header"]'),
    document.querySelector('[class*="shot-info"]'),
    document.querySelector('main'),
    document.querySelector('.shot-sidebar'),
    document.querySelector('#main'),
    document.body
  ];
  
  console.log('🔍 Searching for container...');
  possibleContainers.forEach((el, i) => {
    if (el) {
      console.log(`  ✓ Container ${i} found:`, el.className || el.tagName);
    }
  });
  
  const container = possibleContainers.find(el => el !== null);
  
  if (container) {
    // Insert at the beginning of the container
    container.insertBefore(timestampDiv, container.firstChild);
    console.log('🎨 ✅ Timestamp inserted into:', container.className || container.tagName);
    console.log('🎨 Timestamp displayed successfully!');
  } else {
    console.log('⚠️ Could not find suitable container for timestamp');
    console.log('Body classes:', document.body.className);
    console.log('Body HTML preview:', document.body.innerHTML.substring(0, 500));
  }
}

// Run when page loads
setTimeout(() => {
  console.log('🔍 Checking for upload date...');
  displayTimestamp();
}, 1000);

// Watch for navigation changes (Dribbble uses AJAX navigation)
let lastUrl = location.href;
new MutationObserver(() => {
  const currentUrl = location.href;
  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;
    console.log('🔄 URL changed, checking for upload date...');
    setTimeout(displayTimestamp, 1000);
  }
}).observe(document.body, {
  childList: true,
  subtree: true
});

// Also watch for the JSON-LD script being added
const observer = new MutationObserver(() => {
  if (!document.querySelector('.timestamp-checker-display')) {
    displayTimestamp();
  }
});

observer.observe(document.head, {
  childList: true,
  subtree: true
});

console.log('🎨 Dribbble Timestamp Checker: Observer active, watching for shot pages');
