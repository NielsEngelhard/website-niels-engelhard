import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website-porto';
  showTerminal = true;

  toggleTerminal(): void {
    this.showTerminal = !this.showTerminal;
  }
}
