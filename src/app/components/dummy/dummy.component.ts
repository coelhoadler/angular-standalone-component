import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-dummy',
  template: `
    Seja bem-vindo {{ name }}!!
  `
})
export class DummyComponent {

  @Input() name = '';

  constructor() {
    console.log('Caindo no construtor do Dummy component...');
  }

}
