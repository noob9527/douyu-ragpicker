import { isBarrageMessage, MessageSource } from './domain';

import Clock from './clock';

let succeededCount = 0;
let clock: Clock;

let state = {
  working: false,
  barrage: ''
};

// listen message from content script
window.addEventListener('message', e => {
  if (e.source !== window) return;

  if (!isBarrageMessage(e.data)) return;

  if (e.data.source !== MessageSource.CONTENT_SCRIPT) return;

  if (e.data.payload.working) {
    // start
    clock = new Clock(sendBarrage.bind(null, e.data.payload.barrage));
    clock.start();
  } else {
    stopRobbing();
  }

  state = e.data.payload;
});

function sendBarrage(barrage: string) {
  // if (!inTheCountDown()) {
  //   stopRobbing();
  //   // send message to content script
  //   sendMessageToContent({
  //     type: 'BARRAGE',
  //     source: MessageSource.PAGE_SCRIPT,
  //     payload: state
  //   });
  //   return;
  // }

  const btn = findSendButton();
  if (!btn) {
    console.error('fail to find button element');
    return;
  }
  if (isSendButtonDisabled(btn)) return;

  const textInput = findInput();
  if (!textInput) {
    console.error('fail to find input element');
    return;
  }

  const txt = (succeededCount % 2) ? barrage + barrage : barrage;
  textInput.value = txt;
  btn.click();

  console.log(`send barrage: ${txt}`);
  console.log('succeededCount', ++succeededCount);
}

function stopRobbing() {
  if (clock) {
    clock.stop();
  }
  state.working = false;
  console.log('stop working');
  console.log('succeededCount', succeededCount);
  succeededCount = 0;
}

function sendMessageToContent(msg: any) {
  msg.source = MessageSource.PAGE_SCRIPT;
  window.postMessage(msg, '*');
}

function inTheCountDown(): boolean {
  return !!document.querySelector('div[class^="luckDraw"]');
}

function isSendButtonDisabled(btn: Element) {
  const disabledClassName = 'is-gray';
  return btn.classList.contains(disabledClassName);
}

function findSendButton(): HTMLElement {
  return document.getElementsByClassName('ChatSend-button')[0] as HTMLElement;
}

function findInput(): HTMLInputElement {
  return document.getElementsByClassName('ChatSend-txt')[0] as HTMLInputElement;
}
