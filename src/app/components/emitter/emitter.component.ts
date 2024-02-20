import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';
import { ChangeNumberComponent } from '../change-number/change-number.component';

@Component({
  selector: 'app-emitter',
  standalone: true,
  imports: [AppComponent, CommonModule, ChangeNumberComponent],
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent implements OnInit {
  myNumber: number = 0;

  constructor() { }

  ngOnInit(): void { }

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 100);
  }
}
