import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/core/interfaces/hero';
import { timer, take } from 'rxjs';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],

})
export class HeroCardComponent {

  @Input() hero!: Hero | any;
  @Input() public noneBtnBattle: boolean = false;
  @Input() public noneBtnSelect: boolean = false;
  @Input() public noneBtnDelete: boolean = false;
  @Input() public animation: boolean = false;

  @Output() currentHero: EventEmitter<Hero> = new EventEmitter<Hero>;
  @Output() deleteHero: EventEmitter<Hero> = new EventEmitter<Hero>;

  constructor(
    private router: Router
  ) { }

  public sendHero(hero: Hero): void {
    this.currentHero.emit(hero)
  }
  public sendDeleteHero(hero: Hero): void {
    this.deleteHero.emit(hero)
  }

  public goToDetails(hero: Hero): void {
    if(hero.id) {
       this.router.navigate(['/detail-page', hero.id]);
     }
   }
}
