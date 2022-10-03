import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {FormControl} from "@angular/forms";
import {HeroesService} from "../../../services/heroes.service";
import {Router} from "@angular/router";
import { Hero} from 'src/app/core/interfaces/hero';
import { AuthServiceService } from './../../../services/auth-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  public keyboardFlag: boolean = false;
  public searchHero!: FormControl;
  public searchLetter!: string;
  public buttonLetter!: string;
  public heroes:  any;


  constructor(
    private authService: AuthServiceService,
    private heroesService: HeroesService,
    private router: Router,
    private cdr: ChangeDetectorRef 
  ) { }

  ngOnInit(): void {
    this.searchHero = new FormControl('');
    this.heroesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes.results.filter((hero: Hero) => hero.powerstats.combat !== 'null');
      this.cdr.detectChanges();
    });

  }




  public showKeyboard(): void {
    if(!this.keyboardFlag) {
      this.keyboardFlag = true;
    } else {
      this.keyboardFlag = false;
    }
  }

 public goToDetails(hero: any): void {
   if(hero.id) {
      this.router.navigate(['/detail-page', hero.id])
    }
  }

  public addToSelectedHeroes(hero: any): void {
    if(hero) {
      this.heroesService.addToUserHeroes(hero)
    }
  }

  public getSearchHero(): void {
    if(this.searchHero.value) {
      this.heroesService.getSearchedHeroes(this.searchHero.value )
      .subscribe(searchedHeroes => {  
        let result = searchedHeroes.results.filter((hero: Hero) => hero.powerstats.combat !== 'null')         
        this.heroes =  result;
        this.cdr.detectChanges();
        })
    }
  }

  public lala(letter: string): void {
    this.buttonLetter = letter;
    this.searchLetter = `You searching by letter : ${letter}`;
    this.heroesService.getSearchedHeroes(letter)
    .subscribe(searchedHeroes => {
      this.heroes = searchedHeroes.results;
      this.cdr.detectChanges();
    })
  }
}
