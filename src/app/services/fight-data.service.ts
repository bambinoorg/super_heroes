import { Injectable } from '@angular/core';
import { FightData } from '../core/interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class FightDataService {

  private fightData: any = [];

  constructor() { }

  public getFightData(): any[] {
    if(localStorage.getItem('fight-data')) {
     return this.fightData = JSON.parse(localStorage.getItem('fight-data') || '') 
    } else {
    return this.fightData;
  }
  }
  public setFightDataItem(heroName: string, heroId: string, opponentName: string, opponentId: string, result: string | null ): void {
   this.fightData = [...this.fightData,
     {
      fightDate: new Date(),
      heroName: heroName, 
      heroId: heroId, 
      opponentName: opponentName,
      opponentId: opponentId,
      result: result
    
    }];
   localStorage.setItem('fight-data', JSON.stringify(this.fightData));
  }

public clearFightData(): void {
  this.fightData = [];
  localStorage.setItem('fight-data', JSON.stringify(this.fightData));
}

 }
