import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, TrackByFunction, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {  delayWhen, map, retryWhen, Subscription, take, tap, timer } from 'rxjs';
import { HeroesService } from './../../../services/heroes.service';
import { Hero} from '../../interfaces/hero';
import { FightDataService } from './../../../services/fight-data.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';
import { PowerDataService } from './../../../services/power-data.service';
import { Power } from 'src/app/core/interfaces/hero';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.scss'],
})
export class BattlePageComponent implements OnInit {

  public userHero: any = null;
  public find: boolean = false;
  public opponentIsFind: boolean = false;
  public fight: boolean = false;
  public stop: boolean = false;
  public heroOpponent!: any;
  public battleResult!: string | null ;
  public userName!: string;
  public stopBattle!: Subscription;
  public fightData: any[] = [];
  public powerUps: Power[] = [];
  public isClicked: boolean = false;

  private heroPower!: any;
  private opponentPower!: any;

  trackByFn: TrackByFunction<Power> = (index, item) => item.param; 

  constructor(
    private authService: AuthServiceService,
    private router : Router,
    private heroesServise : HeroesService,
    private fightDataService : FightDataService,
    private powerDataService : PowerDataService,
  ) { }

  ngOnInit(): void {
    this.authService.checkSession();
    this.fightData = this.fightDataService.getFightData();
    this.getUserName();
    this.getUserHero();
    this.getPowerUps();
  }

  public goToDetails(hero: any): void {
    if(hero.id) {
       this.router.navigate(['/detail-page', hero.id])
     }
    }
//Запуск боя
 public goBattle (): void {
if (this.stopBattle) {
  this.stopBattle.unsubscribe();
}
  this.battleResult = null;
  this.find = true;
  this.opponentIsFind = false;
  if(this.find) {
    
   this.stopBattle = timer(2500).pipe(
      map(() => (Math.floor(Math.random() * 440)).toString()),
      switchMap((randomId) => this.heroesServise.getRandomHero(randomId )),
      map((opponent) => {
        if( Object.values(opponent.powerstats).some((el) => el === 'null')) {

           throw opponent;
        }
       return opponent;
      }),
      retryWhen(errors =>
        errors.pipe(
          // tap(() =>  )), // TODO: Err when hero is null, add Tostr libary
          delayWhen(val => timer( 1000))
        )
      ),tap((resp) => {
        
        this.find = false;
        this.heroOpponent = resp;
        this.opponentIsFind = true;
        this.fight = true;
        this.isClicked = true;
        
        this.heroPowerSum();
      
      }),
      switchMap(() => this.battleScore()),
      switchMap(() => timer(2500))
      ).subscribe(() => {
      this.powerDataService.setPowerUpsToLocalstorage();
      this.powerUps = JSON.parse(localStorage.getItem('power-ups') || '');
      this.fightDataService.setFightDataItem(
        this.userHero.name, 
        this.userHero.id,
        this.heroOpponent.name,
        this.heroOpponent.id,
        this.battleResult); 
        this.ifLose()
        
      }               
    )
   } 
  }   

//Остановить бой
  public stopSeacrh(): void {
    this.find = false;
   this.stopBattle.unsubscribe();
  }
//Навигейт на страниццу юзера после поражения
  public goToUserPage (user: any): void {
    this.router.navigate(['/user-page', user])
  }

  //Если проиграли убираем героя из избранных


public  ifLose(): void {
  if(this.battleResult === 'Lose') {  
      
       localStorage.removeItem('active-hero');
         
       let NotFilterHeroes = JSON.parse (localStorage.getItem('allUserHeroes') || '');
       let filterHeroes = NotFilterHeroes.filter((hero: Hero) => this.userHero.id !== hero.id );
       localStorage.setItem('allUserHeroes', JSON.stringify(filterHeroes));
       this.isClicked = true;
       this.userHero = null;
   }
  }
//Сравнениваем силу
  private battleScore (): Observable<any> {
   return timer(4000 )
    .pipe(tap(() => {
      if(this.opponentIsFind) {

        if(this.heroPower > this.opponentPower) {

        this.fight = false;
        this.isClicked = false;
        this.battleResult = 'Win';
       
     } else if(this.heroPower < this.opponentPower) {

        this.fight = false;
        this.isClicked = false;
        this.battleResult = 'Lose';

      } else {

        this.fight = !this.fight;
        this.isClicked = false;
        this.battleResult = null;
      }     
    }   
  }))
   
  }

  //Подсчитываем силу героев
  private heroPowerSum(): void {

  this.heroPower = Object.values(this.userHero.powerstats)
  .reduce((prev:  any, next: any ) =>  +prev + +next );
  this.opponentPower = Object.values(this.heroOpponent.powerstats)
  .reduce((prev: any, next: any) => +prev + +next);
   
  }
//Получаем имя юзера
  public getUserName() : void {
    let result =  JSON.parse(localStorage.getItem('session') || '');
     this.userName = result.username;
   }

   private getUserHero(): void | null {
    if(localStorage.getItem('active-hero')){
      this.userHero = JSON.parse(localStorage.getItem('active-hero') || '') 
    } else {
      this.isClicked = true;
      return null;
    }
   }
   //Power ups =========================================================

   public upgradeHero(powerUp : Power): void {
   
    if(powerUp.quantity > 0) {
      this.userHero.powerstats[powerUp.param] = +this.userHero.powerstats[powerUp.param] + powerUp.stats;
      --powerUp.quantity;
     this.isClicked = true;
     this.powerDataService.updatePowerUps(powerUp);

    }
        }
   public getPowerUps(): void {
    if(!localStorage.getItem('power-ups')) {
        this.powerUps = this.powerDataService.getPowerUps();
      } else {
      this.powerUps = JSON.parse(localStorage.getItem('power-ups') || '');
    }
  }
       

   
}