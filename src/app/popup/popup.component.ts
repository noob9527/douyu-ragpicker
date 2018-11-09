import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.sendMessage();
  }

  sendMessage = () => {
    chrome.tabs
      .query({ active: true, currentWindow: true }, (tabs) => {
        console.log(tabs);
        chrome.tabs.sendMessage(tabs[0].id, { greeting: 'hello' }, res => {
          console.log('res:', res);
        });
      });
  };

}
