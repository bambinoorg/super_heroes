import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { HeroesService } from './../../../../services/heroes.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userName!: string;
  public userHeores$!: Observable<number>;

  constructor(
    private router: Router,
    private heroesService : HeroesService
  ) { }

  ngOnInit(): void {
    this.userHeores$ = this.heroesService.getAllUserHeroesObs()
    this.getUserName();
  }
  public getUserName() : void {
   let result =  JSON.parse(localStorage.getItem('session') || '');
    this.userName = result.username
  }
  public goToUserPage (user: any): void {
    this.router.navigate(['/user-page', user])
  }
  public goHome (): void {
    this.router.navigate(['/home'])
  }
  public goBattle (): void {
    this.router.navigate(['/battle-page'])
  }
}
