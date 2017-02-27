import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Polymer } from '../polymer-annotation';

@Component({
  selector: 'app-paper-elements',
  templateUrl: './paper-elements.component.html',
  styleUrls: ['./paper-elements.component.css']
})
@Polymer({
  components: [
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
  ]
})
export class PaperElementsComponent {
  debug = {} as any;
  counter = 0;

  @ViewChild('paperButton1Ref') paperButtonRef: ElementRef;

  constructor(){
    
  }

  ngOnInit() {
    // this.paperButtonAddOwnKeyBinding();

    this.paperCardImageUrl = this.paperCardImageUrls[0];
  }

  ////////////////////////////////////////////////
  // paper-button

  // not workging
  paperButtonAddOwnKeyBinding() {
    (window as any).Polymer.dom(this.paperButtonRef.nativeElement).addOwnKeyBinding('click', (...args) => {
      console.log(args)
    });
  }

  paperButtonClick(data, event) {
    this.debug.paperButton = {
      event,
      from: 'angular',
      data,
      counter: this.counter++
    };
  }

  paperButtonTransitionend(data) {
    this.debug.paperButton = {
      event: 'transitionend',
      from: 'angular',
      data,
      counter: this.counter++
    };
  }

  ////////////////////////////////////////////////
  // paper-card
  paperCardImageUrls = [  
    'https://s3.amazonaws.com/media-p.slid.es/uploads/129681/images/1679676/isis-NG.png',
    'https://s3.amazonaws.com/media-p.slid.es/uploads/129681/images/3532997/isis-cat-smiling.JPG'
  ];
  paperCardImageUrl = '';
  paperCardElevation = 1;

  paperCardClick(data) {
    this.debug.paperCard = {
      event: 'click',
      from: 'angular',
      data,
      counter: this.counter++
    };
    this.paperCardImageUrl = this.paperCardImageUrls[ this.counter % this.paperCardImageUrls.length ];
  }

  paperCardToggleElevation() {
    if (this.paperCardElevation === 1){
      this.paperCardElevation = 5;
    }
    else {
      this.paperCardElevation = 1;
    }
  }

  ////////////////////////////////////////////////
  // paper-checkbox

  paperCheckboxChange(event, checked) {
    this.debug.paperCheckbox = {
      event,
      checked,
      from: 'angular',
      counter: this.counter++
    };
  }

  paperCheckboxIronChange(event, checked) {
    this.debug.paperCheckbox = {
      event,
      checked,
      from: 'angular',
      counter: this.counter++
    };
  }

  ////////////////////////////////////////////////
  // paper-fab

  paperFabClick(type, active) {
    this.debug.paperFab = {
      type,
      active,
      from: 'angular',
      counter: this.counter++
    };
  }

  paperFabActive(event) {
    this.debug.paperFab = {
      type: 'active-changed',
      event,
      from: 'angular',
      counter: this.counter++
    };
  }

  ////////////////////////////////////////////////
  // paper-input

  paperInputValue = '';
  paperInputKeyup(event) {
    this.debug.paperInput = {
      event,
      value: this.paperInputValue,
      from: 'angular',
      counter: this.counter++
    };
  }

  paperInputValueChanged(event) {
    // this.paperInputValue = event.target.value;
    this.debug.paperInput = {
      event:'value-changed',
      value: this.paperInputValue,
      from: 'angular',
      counter: this.counter++
    };
  }

  paperInputFocus(event) {
    this.debug.paperInput = {
      event:'focus-changed',
      focus: event.target.focused,
      from: 'angular',
      counter: this.counter++
    };
  }
}
