import RuntimeListener from './runtime-listener';

const listener = new RuntimeListener();

listener.listen();

function injectScript(filePath) {
  const url = chrome.extension.getURL(filePath);
  const script = document.createElement('script');
  script.setAttribute('type', 'module');
  script.setAttribute('src', url);
  document.body.appendChild(script);
}
