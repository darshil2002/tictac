import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-squre',
  templateUrl: './squre.component.html',
  styleUrls: ['./squre.component.css']
})

export class SqureComponent {
  @Input() value !: string;
  
}
