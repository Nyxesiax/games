import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id: number;
  bezeichnung: string;
  genre: string;
  fsk: number;
  constructor(private service: DataService) { }

  ngOnInit() {
  }

  save() {
    this.service.save(this.id, this.bezeichnung, this.genre, this.fsk);
  }
}
