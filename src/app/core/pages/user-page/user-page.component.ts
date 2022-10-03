import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Hero, Power } from 'src/app/core/interfaces/hero';
import { HeroesService } from './../../../services/heroes.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { PowerDataService } from './../../../services/power-data.service';
import { DeleteModalComponent } from './../../components/ui/delete-modal/delete-modal.component';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FightDataService } from 'src/app/services/fight-data.service';
import { interval, map, Subscriber, takeUntil, takeWhile, tap, timer, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default
  
})
export class UserPageComponent implements OnInit {

  public allUserHeroes: Hero[] = [];
  public powerUps: Power[] = [];
  public deleteHeroObject!: Hero


  constructor(
    private authService: AuthServiceService,
    private heroesService: HeroesService,
    private powerDataService: PowerDataService,
    private router: Router,
    private deleteDialog: MatDialog,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.authService.checkSession();
    this.allUserHeroes = this.heroesService.getAllUserHeroes();
    this.getPowerUps();
  
  }

  public goToDetails(hero: any): void {
    if(hero.id) {
       this.router.navigate(['/detail-page', hero.id]);
     }
   }

   public goToHomePage(): void {
    this.router.navigate(['/home']);
   }  

   public goBattle(hero: Hero): void {
    localStorage.setItem('active-hero', JSON.stringify(hero));
    this.router.navigate(['/battle-page']);
   }

   public deleteHero(hero: Hero): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '450px';
    dialogConfig.data = hero

    const dialogRef = this.deleteDialog.open(DeleteModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result) {
        this.heroesService.deleteUserHero(hero);
        this.heroesService.setUserHeroesInLocal();
        this.allUserHeroes = this.heroesService.getAllUserHeroes();
        this.cdr.detectChanges();
      }
    })
   }
  
   public getPowerUps(): Power[] | any {
    if(!localStorage.getItem('power-ups')) {
      this.powerUps = this.powerDataService.getPowerUps();
      this.powerDataService.setPowerUpsToLocalstorage();      
    } else {
      this.powerUps = JSON.parse(localStorage.getItem('power-ups') || ''); 
    }
   }


   
}

