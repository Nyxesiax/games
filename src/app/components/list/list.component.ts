import { Component, OnInit } from '@angular/core';
import {Games} from '../../model/Games';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  get game(): Games[] {
    return this.service.game;
  }

  constructor(private service: DataService) {
    this.game.push(new Games(1, 'Fortnite', 'BR', 12));
    this.game.push(new Games(2, 'PUBG', 'BR', 16));
  }

  ngOnInit() {
  }
  del(game: Games) {
    this.service.del(game);
  }

  showAlert(g: Games) {
  this.service.showAlert(g);
  }
}
