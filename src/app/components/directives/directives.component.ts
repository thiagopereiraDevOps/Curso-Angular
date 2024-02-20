import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent implements OnInit {
  public size = 40;
  public font = 'Arial';
  public color = 'red';

  classes = ['green-title', 'small-title'];

  underline = 'underline-title';

  constructor() { }

  ngOnInit(): void {
    
  }

}
