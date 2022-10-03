import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'app-ironman',
  templateUrl: './ironman.component.html',
  styleUrls: ['./ironman.component.scss']
})
export class IronmanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Directive({
  selector: 'video[autoplay]',
  host: {
      'autoplay': '',
      'oncanplay': 'this.play()',
      'onloadedmetadata': 'this.muted = true'
  }
})
export class VideoAutoplayDirective {}
