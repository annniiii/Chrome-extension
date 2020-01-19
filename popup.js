// If you want to sendMessage from any popup or content script,
// use `chrome.runtime.sendMessage()`.

// Send message to background:
chrome.runtime.sendMessage(p, function(response) {
  console.log(`message from background: ${JSON.stringify(response)}`);
});


// If you want to sendMessage from tab of browser,
// use `chrome.tabs.sendMessage()`.

// Send message from active tab to background: 
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, p, function(response) {
    console.log(`message from background: ${JSON.stringify(response)}`);
  });
});
