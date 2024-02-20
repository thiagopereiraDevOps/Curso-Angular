import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
  
  handleClick() {
    this.changeNumber.emit();
  }
}
