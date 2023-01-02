import { CommonModule } from '@angular/common';
import { Component, ContentChild, Directive, ElementRef, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
@Directive({
  selector: 'app-card-footer',
  standalone: true
})
export class CardFooterDirective { }

@Directive({
  selector: 'app-card-header',
  standalone: true
})
export class CardHeaderDirective {
 constructor() { }
}

@Directive({
  selector: '[appCardMainContent]',
  standalone: true
})
export class CardMainContentDirective {
 constructor(
  public template: TemplateRef<any>
 ) { }
}

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule]
})
export class CardComponent {

  @Input() imageName = 'fence';
  @Input() title = 'Flex Grow';

  @ContentChild(CardMainContentDirective) cardMainContent?: CardMainContentDirective;

  constructor() { }
}
