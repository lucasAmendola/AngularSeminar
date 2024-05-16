import { Component } from '@angular/core';
import { Game } from './Game';


@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  items: Game[] = [
    {
      image: 'assets/img/wolfnewcolossus.jpg',
      name: 'Wolfenstein 2, New Colossus',
      genre: 'Accion',
      price: 560,
      stock: 130,
      offer: false,
    },
    {
      image: 'assets/img/wolfnewcolossus.jpg',
      name: 'Wolfenstein 2, New Colossus',
      genre: 'Accion',
      price: 560,
      stock: 130,
      offer: false,
    },
    {
      image: 'assets/img/wolfnewcolossus.jpg',
      name: 'Wolfenstein 2, New Colossus',
      genre: 'Accion',
      price: 560,
      stock: 0,
      offer: true,
    },
    {
      image: 'assets/img/wolfnewcolossus.jpg',
      name: 'Wolfenstein 2, New Colossus',
      genre: 'Accion',
      price: 560,
      stock: 130,
      offer: false,
    },
  ]
  constructor(){}

  ngOnInit(): void {
      
  }
}
