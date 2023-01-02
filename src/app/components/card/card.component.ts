import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() imageName = 'fence';

  constructor() {
    console.log('Esse é meu card!');
  }
}
