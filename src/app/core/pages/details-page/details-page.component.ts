import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../../services/heroes.service";
import {Subscription, switchMap} from "rxjs";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit, OnDestroy {
  public hero: any;
  public subscriptionHero!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
  ) { }

  ngOnInit(): void {
  this.subscriptionHero =   this.activatedRoute.params.pipe(
      switchMap((data) => this.heroesService.getHeroById(data['id']))
    )
      .subscribe((hero) =>
        this.hero = hero);
  }

  ngOnDestroy(): void {
    this.subscriptionHero.unsubscribe;
  }
}
