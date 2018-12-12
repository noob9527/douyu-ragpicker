import { Component, OnInit } from '@angular/core';
import { LuckyMoneyRobberState } from '../domain';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent implements OnInit {

  working = false;
  barrage = '';

  constructor() {
  }

  ngOnInit() {
    this._initChromeMsgListener();
    this._initStateFromStorage();
  }

  _initChromeMsgListener() {
    if (!chrome || !chrome.runtime || !chrome.runtime.onMessage) return;

    // listen message from content script
    chrome.runtime.onMessage
      .addListener(msg => {
        if (msg.type !== 'BARRAGE') return;
        this.working = msg.payload.working;
        this.barrage = msg.payload.barrage;
      });
  }

  _initStateFromStorage() {
    if (!chrome.storage) return;
    chrome.storage.sync
      .get('barrageRobotState', (data: any) => {
        if (!data || !data.barrageRobotState) return;
        this.working = data.barrageRobotState.working;
        this.barrage = data.barrageRobotState.barrage;
      });
  }

  _onSwitching() {
    if (!this.working && !this.barrage) return;

    this.working = !this.working;

    const barrageRobotState: LuckyMoneyRobberState = {
      working: this.working,
      barrage: this.barrage
    };

    this.sendMessage({
      type: 'BARRAGE',
      source: 'EXTENSION',
      payload: barrageRobotState
    });
  }

  // send message to content script
  sendMessage = (msg: any) => {
    if (!chrome.tabs) return;
    chrome.tabs
      .query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, msg);
      });
  };

}
