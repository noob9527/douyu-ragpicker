import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent implements OnInit {

  robbing = false;
  barrage = '';

  constructor() {
  }

  ngOnInit() {
  }

  _onSwitching() {
    if (!this.robbing) {
      if (!this.barrage) return;
    }

    this.robbing = !this.robbing;
    this.sendMessage({
      robbing: this.robbing,
      barrage: this.barrage
    });
  }

  sendMessage = (msg: any) => {
    if (!chrome.tabs) return;
    chrome.tabs
      .query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, msg);
      });
  };

}
