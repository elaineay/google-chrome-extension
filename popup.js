let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // need activeTab permission to allow extension temp access
    // to `tabs` API -> then can call tabs.executeScript
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};
