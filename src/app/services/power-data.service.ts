import { Injectable } from '@angular/core';
import { Power } from '../core/interfaces/hero';
import { PowerUps } from '../core/abstracts/power-ups';


@Injectable({
  providedIn: 'root'
})
export class PowerDataService extends PowerUps {
  
  constructor() {
    super();
  }


  public getPowerUps(): Power[] {
    return this.powerUps;
  }

  public updatePowerUps(powerUp: Power): void {
    this.powerUps = this.powerUps.map((el) => {
      if (el.param === powerUp.param) {
        el = powerUp;
      }
      return el
    });
  }
  public setPowerUpsToLocalstorage(): void {
    localStorage.setItem('power-ups', JSON.stringify(this.powerUps))

  }
}
