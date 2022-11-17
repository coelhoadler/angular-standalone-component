import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' },
  { path: 'app', component: AppComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
})
export class AppModule { }
