import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-alphabet-keyboard',
  templateUrl: './alphabet-keyboard.component.html',
  styleUrls: ['./alphabet-keyboard.component.scss']
})
export class AlphabetKeyboardComponent implements OnInit {
  @Output() letterEvent: EventEmitter<string> = new EventEmitter<string>();
  

  public absList: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  constructor( ) { }

  ngOnInit(): void {

  }

  public sendLetter(letter: any): void {
    this.letterEvent.emit(letter);
  }
}
