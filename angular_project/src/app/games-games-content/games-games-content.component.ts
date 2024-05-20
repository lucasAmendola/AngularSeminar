import { Component } from '@angular/core';
import { GameListComponent } from '../game-list/game-list.component';
import { GamesCarritoComponent } from '../games-carrito/games-carrito.component';

@Component({
  selector: 'app-games-games-content',
  standalone: true,
  imports: [GameListComponent, GamesCarritoComponent],
  templateUrl: './games-games-content.component.html',
  styleUrl: './games-games-content.component.css'
})
export class GamesGamesContentComponent {

}
