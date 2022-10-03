import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

 @Input() public textDecoration : string = '';
 @Input() public typeText : string = 'text';
 @Input() public formControlCustom!: FormControl;
  constructor() { }

  ngOnInit(): void {
  }

}
