import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() textDecoration: string = '';
  @Input() buttonColor: string = 'primary';
  @Input() disabled!: boolean;

  constructor() { }
  ngOnInit(): void {
  }

}
