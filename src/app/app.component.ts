import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  components = [
    'iron-icons',
    'paper-button',
    'paper-checkbox',
    'paper-card',
    'paper-fab',
    'paper-icon-button',
    'paper-input',
    'paper-listbox',
    'paper-item',
    'paper-menu',
    'paper-slider',
    'paper-spinner',
    'paper-toast',
    'paper-toggle-button'
  ];

  constructor() {
    this.loadExternalComponents().then(_ => {
      console.log('Polymer components loaded');
    });
  }

  loadExternalComponents() {
    return new Promise( (res, rej) => {
      this.components.map((cmp) => {
        const link = document.createElement('link');
        link.rel = 'import';
        link.href = `assets/bower_components/${cmp}/${cmp}.html`;
        document.head.appendChild(link);
        link.onerror = rej;
        link.onload = (e) => {
          res();
        };
      });
    });
  }

}
