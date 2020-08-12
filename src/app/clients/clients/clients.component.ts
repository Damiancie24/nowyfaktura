import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  title = 'Lista Klientow';
  showClients = true;
  clienstsList = [
    'Coca-Cola',
    'Facebook',
    'Twitter',
    'PLL LOT',
    'Romet'
  ]


  constructor() { }

  ngOnInit(): void {
  }

  onShowListClick(): void{
    this.showClients = !this.showClients;
  }
}
