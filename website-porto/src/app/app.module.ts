import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { TerminalComponent } from './apps/terminal/terminal.component';
import { MoviesComponent } from './apps/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
