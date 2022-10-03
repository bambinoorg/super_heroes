import { Injectable } from '@angular/core';
import {BehaviorSubject, interval, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IPayLoadHeroesResponse} from "../core/interfaces/user";
import { Hero } from '../core/interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private allUserHeroes: Hero[] = [];
  private allUserHeroesSubj: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private allUserHeroes$: Observable<number> = this.allUserHeroesSubj.asObservable();


  constructor(
    private httpClient: HttpClient,
  ) {
    this.setUserHeroesSubj();
   }

  public getAllUserHeroesObs():  Observable<number> {
    return this.allUserHeroes$;
  }
  public setUserHeroesSubj(): void {   
    this.allUserHeroes = this.getAllUserHeroes();
    this.allUserHeroesSubj.next( this.allUserHeroes.length);
  }

  public getHeroes (): Observable<IPayLoadHeroesResponse> {
    return this.httpClient.get<IPayLoadHeroesResponse>('https://www.superheroapi.com/api.php/3352255001764991/search/a');
  }

  public getSearchedHeroes (heroName: string): Observable<IPayLoadHeroesResponse> {
    return this.httpClient.get<IPayLoadHeroesResponse>(`https://www.superheroapi.com/api.php/3352255001764991/search/${heroName}`);
  }
  public getRandomHero (heroId: string): Observable<IPayLoadHeroesResponse> {
    return this.httpClient.get<IPayLoadHeroesResponse>(`https://www.superheroapi.com/api.php/3352255001764991/${heroId}`);
  }
  public getHeroById (heroId: string): Observable<any> {
    return this.httpClient.get<IPayLoadHeroesResponse>(`https://www.superheroapi.com/api.php/3352255001764991/${heroId}`);
  }

  public getAllUserHeroes (): Hero[] {
    return this.allUserHeroes = JSON.parse(localStorage.getItem('allUserHeroes') || '')
  }
  
  public addToUserHeroes(hero: Hero): void {
    this.allUserHeroes.push(hero);
    const selectedHero = JSON.stringify(this.allUserHeroes)
    localStorage.setItem('allUserHeroes', selectedHero);
    this.setUserHeroesSubj();
  }

  public deleteUserHero(hero: Hero): void {
    this.allUserHeroes = this.allUserHeroes.filter((userHero: Hero) => userHero.id !== hero.id);
    this.setUserHeroesInLocal();
    this.setUserHeroesSubj();
  }

  public setUserHeroesInLocal(): void {
   localStorage.setItem('allUserHeroes', JSON.stringify(this.allUserHeroes))
  }
}