import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { AppHeroHeader } from './components';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AppHeroHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('code');
}
