import { Injectable } from '@angular/core';
import {Games} from '../model/Games';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   game: Games[] = [];

  constructor() {
  }

  del(game: Games) {
   this.game = this.game.filter(g => g !== game);
  }

  save(id: number, bezeichnung: string, genre: string, fsk: number) {
    this.game.push(new Games(id, bezeichnung, genre, fsk));
  }

  showAlert(g: Games) {
    alert('Du hast ' + g.bezeichnung + ' ausgewählt');
  }
}
