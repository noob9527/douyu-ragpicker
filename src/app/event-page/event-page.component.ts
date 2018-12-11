import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.less']
})
export class EventPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

// if (chrome && chrome.runtime && chrome.runtime.onInstalled) {
//   const DOUYU_DOMAIN = 'douyu.com';
//
//   chrome
//     .runtime
//     .onInstalled
//     .addListener(function () {
//       chrome.declarativeContent.onPageChanged
//         .removeRules(undefined, function () {
//           chrome.declarativeContent.onPageChanged
//             .addRules([{
//               conditions: [new chrome.declarativeContent.PageStateMatcher({
//                 pageUrl: { hostContains: DOUYU_DOMAIN },
//               })
//               ],
//               actions: [new chrome.declarativeContent.ShowPageAction()]
//             }]);
//         });
//     });
// }

