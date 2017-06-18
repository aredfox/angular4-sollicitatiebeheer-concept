import { Component, OnInit, Input } from '@angular/core';
import { Vacature } from '../../vacature.model';

@Component({
  selector: 'app-vacature-item',
  templateUrl: './vacature-item.component.html',
  styleUrls: ['./vacature-item.component.css']
})
export class VacatureItemComponent implements OnInit {
  @Input()
  vacature: Vacature;
  @Input()
  maximumLengteOmschrijving: number = 100;

  constructor() { }

  ngOnInit() {
  }

}
