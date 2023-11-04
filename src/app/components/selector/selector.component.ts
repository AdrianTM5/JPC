import { Component } from '@angular/core';

@Component({
  selector: 'selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {
  op: any;

  es() {
    this.op = 0;
  }

  en() {
    this.op = 1;
  }
}
