import { Component, OnInit } from '@angular/core';
import { FightData } from 'src/app/core/interfaces/hero';
import { FightDataService } from 'src/app/services/fight-data.service';





@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit {
  public displayedColumns: string[] = ['fightDate', 'heroName', 'opponentName', 'result'];

  public historyData: any[] = [];
  public directionByDate:string = 'asc'; 
  public directionByHero:string = 'asc'; 
  public directionByOpponent:string = 'asc'; 
  public directionByResult:string = 'asc'; 
  

  constructor(   private fightDataService: FightDataService,) { }

  ngOnInit(): void {
   this.getHistoryFromLocal();
  }

  public getHistoryFromLocal(): any {
      this.historyData = this.fightDataService.getFightData(); 
  }
  
  public sortByResult(): void {
  this.directionByResult = this.directionByResult === 'asc' ? 'desc' : 'asc';

    this.historyData =  [...this.historyData.sort((obj:FightData) => {     

      if(obj.result === 'Win' ) {

        return   this.directionByResult === 'asc' ? -1 : 1 ;
      } else if (obj.result === 'Lose' ) {

        return  this.directionByResult === 'desc' ? -1 : 1  ;
      }
      return 0;
    })];
  }

   
  public sortByDate(): void {
    this.directionByDate = this.directionByDate === 'asc' ? 'desc' : 'asc';

      this.historyData =  [...this.historyData.sort((objA: FightData, objB: FightData) => {     
  
        if(objA.fightDate > objB.fightDate ) {
  
          return   this.directionByDate === 'asc' ? -1 : 1 ;
        } else if (objA.fightDate < objB.fightDate ) {
  
          return  this.directionByDate === 'desc' ? -1 : 1  ;
        }
        return 0;
      })];
    }
      public sortByHero(): void {
        this.directionByHero = this.directionByHero === 'asc' ? 'desc' : 'asc';
    
          this.historyData =  [...this.historyData.sort((objA: FightData, objB: FightData) => {     
      
            if(objA.heroName > objB.heroName ) {
      
              return   this.directionByHero === 'asc' ? -1 : 1 ;
            } else if (objA.heroName < objB.heroName ) {
      
              return  this.directionByHero === 'desc' ? -1 : 1  ;
            }
            return 0;
          })]
    }
    public sortByOpponent(): void {
      this.directionByOpponent = this.directionByOpponent === 'asc' ? 'desc' : 'asc';
  
        this.historyData =  [...this.historyData.sort((objA: FightData, objB: FightData) => {     
    
          if(objA.opponentName > objB.opponentName ) {
    
            return   this.directionByOpponent === 'asc' ? -1 : 1 ;
          } else if (objA.opponentName < objB.opponentName ) {
    
            return  this.directionByOpponent === 'desc' ? -1 : 1  ;
          }
          return 0;
        })]
  }
  public clearHistory(): void {
    this.fightDataService.clearFightData();
    this.historyData = this.fightDataService.getFightData(); 
  }

}
