import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/Song';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  songs:Song[];


  constructor() { }

  ngOnInit(): void {
  }

}
