import { isBarrageMessage, Message, MessageSource } from './domain';

injectScript('./page-script.js');

function injectScript(filePath) {
  const url = chrome.extension.getURL(filePath);
  const script = document.createElement('script');
  script.src = url;
  (document.head || document.documentElement).appendChild(script);
}

// listen message from extension
chrome.runtime.onMessage
  .addListener(msg => {
    syncStorage(msg);
    sendMessageToPage(msg);
  });

// listen message from page script
window.addEventListener('message', e => {
  if (e.source !== window) return;

  const message = e.data;

  if (message.source !== MessageSource.PAGE_SCRIPT) return;

  // send message to extension
  chrome.runtime.sendMessage(message);

  syncStorage(message);
});

function syncStorage(message: Message) {
  if (isBarrageMessage(message)) {
    chrome.storage.sync
      .set({ barrageRobotState: message.payload });
  }
}

function sendMessageToPage(msg: any) {
  msg.source = MessageSource.CONTENT_SCRIPT;
  window.postMessage(msg, '*');
}

