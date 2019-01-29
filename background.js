chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#FFFFFF'}, function() {
    console.log("The color is green.");
  });
  // Declarative Content API allows you to show your extension's page
  // action depending on URL of web page and CSS selectors its
  // content matches, without needing to take a host permission or
  // inject a content script.
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      // PageStateMatcher matches web pages if and only if all
      // listed criteria are met.
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
    ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
