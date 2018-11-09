export default class RuntimeListener {
  listen() {
    chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
      console.log(msg);
      sendResponse({ message: 'roger that' });
    });
  }
}
