import { Component, OnInit, Input } from '@angular/core';
import { Vacature } from '../vacature.model';

@Component({
  selector: 'app-vacature-details',
  templateUrl: './vacature-details.component.html',
  styleUrls: ['./vacature-details.component.css']
})
export class VacatureDetailsComponent implements OnInit {
  @Input()
  vacature: Vacature;

  constructor() { }

  ngOnInit() {
  }

}
