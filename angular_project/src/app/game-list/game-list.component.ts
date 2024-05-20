import { Component } from '@angular/core';
import { Game } from './Game';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
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
      quantity : 0,
    },
    {
      image: 'assets/img/wolfnewcolossus.jpg',
      name: 'Wolfenstein 2, New Colossus',
      genre: 'Accion',
      price: 560,
      stock: 130,
      offer: false,
      quantity : 0,
    },
    {
      image: 'assets/img/wolfnewcolossus.jpg',
      name: 'Wolfenstein 2, New Colossus',
      genre: 'Accion',
      price: 560,
      stock: 0,
      offer: true,
      quantity : 0,
    },
    {
      image: 'assets/img/wolfnewcolossus.jpg',
      name: 'Wolfenstein 2, New Colossus',
      genre: 'Accion',
      price: 560,
      stock: 130,
      offer: false,
      quantity : 0,
    },
  ]
  constructor(){}

  ngOnInit(): void {
      
  }

  upQuantity(item : Game) : void{
    if(item.quantity < item.stock)
    item.quantity++;
  }
  downQuantity(item : Game) : void{
    if(item.quantity > 0){
        item.quantity--;
    }
  }

  changeQuatity(event: { preventDefault: () => void; }, item:Game): void {
    
  }
}
