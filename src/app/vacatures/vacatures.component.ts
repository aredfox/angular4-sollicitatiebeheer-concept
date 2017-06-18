import { Component, OnInit } from '@angular/core';
import { Vacature } from './vacature.model';

@Component({
  selector: 'app-vacatures',
  templateUrl: './vacatures.component.html',
  styleUrls: ['./vacatures.component.css']
})
export class VacaturesComponent implements OnInit {
  vacatures: Vacature[] = [
    new Vacature(152498, 'Crisis begeleider omschrijving. Sed malesuada blandit erat vel gravida. Quisque tortor est, rutrum ac orci vel, sollicitudin sollicitudin felis. Fusce lacus augue, fringilla sed rutrum nec, mollis nec sapien. Pellentesque sit amet arcu lacus. Suspendisse vel pellentesque felis, eu tincidunt ligula. Donec mattis felis a lacus sagittis, et suscipit nisl finibus. Suspendisse non elementum urna. Phasellus ac purus volutpat sapien fermentum euismod ac non felis.', 'Crisis begeleider', 'OOOC Potgieter'),
    new Vacature(152954, 'Ombuds omschrijving. Mauris dapibus convallis nisl, non imperdiet turpis placerat et.', 'Ombuds', 'Personeelsdienst'),
    new Vacature(152684, 'Nachtwaker omschrijving. In feugiat fringilla porttitor. Phasellus dignissim orci dolor, ut lacinia tortor dapibus vitae. Duis imperdiet nunc nec tellus consequat mattis. Fusce molestie egestas cursus. Nam fringilla odio nec nisi vehicula rutrum. Donec gravida velit sed condimentum mollis. In viverra tempus lectus. Mauris tortor neque, ultricies quis tincidunt ac, malesuada et urna. Maecenas vitae neque id dolor congue tempor sed id elit. In elementum efficitur purus at ullamcorper.', 'Nachtwaker', 'OOOC Potgieter'),
    new Vacature(152954, 'Klusjesman omschrijving. Mauris dapibus convallis nisl, non imperdiet turpis placerat et. Pellentesque ornare pretium mi vel dictum. Donec lobortis ut mauris aliquam consequat. In tristique ante a rutrum pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam ultrices a leo sed tempor. Ut ornare sapien magna, sit amet molestie augue aliquet a.', 'Klusjesman', 'Technische Dienst')
  ];
  geselecteerdeVacature: Vacature;

  constructor() { }

  onVacatureGeselecteerd(vacature: Vacature) {
    this.geselecteerdeVacature = vacature;
  }

  ngOnInit() {
  }

}
