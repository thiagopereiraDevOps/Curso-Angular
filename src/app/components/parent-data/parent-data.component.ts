import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = '';
  @Input() userData!: {email: string, role: string};

  constructor() { }

  ngOnInit(): void {
    
  }

}
