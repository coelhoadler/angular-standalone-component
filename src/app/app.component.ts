import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { DummyComponent } from 'src/app/components/dummy/dummy.component';
import { CardComponent, CardFooterDirective, CardHeaderDirective, CardMainContentDirective } from './components/card/card.component';

@Component({
  standalone: true,
  imports: [CommonModule, DummyComponent, CardComponent, CardFooterDirective, CardHeaderDirective, CardMainContentDirective],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'angular-v15';

  constructor(elementRef: ElementRef) {
    // console.log(elementRef.nativeElement.getAttribute('parameter'))
  }

}
