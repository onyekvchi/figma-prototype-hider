chrome.webNavigation.onHistoryStateUpdated.addListener(changeInfo => {
  chrome.tabs.sendMessage(changeInfo.tabId, { message: 'changedUrl', url: changeInfo.url });
});