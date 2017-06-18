import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vacature } from '../vacature.model';

@Component({
  selector: 'app-vacature-lijst',
  templateUrl: './vacature-lijst.component.html',
  styleUrls: ['./vacature-lijst.component.css']
})
export class VacatureLijstComponent implements OnInit {
  @Input()
  vacatures: Vacature[] = [];
  geselecteerdeVacature: Vacature;
  @Output()
  vacatureGeselecteerd: EventEmitter<Vacature> = new EventEmitter<Vacature>();

  constructor() { }

  onVacatureGeselecteerd(vacature: Vacature) {
    this.geselecteerdeVacature = vacature;
    this.vacatureGeselecteerd.emit(this.geselecteerdeVacature);
  }

  ngOnInit() {
  }

}
