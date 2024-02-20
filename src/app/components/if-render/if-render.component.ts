import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if-render',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent implements OnInit {
  canShow: boolean = true;
  name = 'Thiago Pereira';

  constructor() { }

  ngOnInit(): void {
    
  }

}
