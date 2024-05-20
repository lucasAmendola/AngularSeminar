import { Component, Pipe } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { GamesCarritoComponent } from './games-carrito/games-carrito.component';
import { GamesGamesContentComponent } from './games-games-content/games-games-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameListComponent, FormsModule, CurrencyPipe, 
            GamesCarritoComponent, GamesGamesContentComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project';
}
