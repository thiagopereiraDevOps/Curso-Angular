import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Thiago Pereira';
  age: number = 39;
  job = 'Programador';
  hobbies = ['Bike', 'Ler Livro', 'Futebol', 'Estudar'];
  car = {
    name: 'Siena',
    year: 2019,
  };

  constructor() { }

  ngOnInit(): void {

  }

}
