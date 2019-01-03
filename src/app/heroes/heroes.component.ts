import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;

  tamanho : number = 1;
  selectedHero: Hero = this.heroes[0];
  
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
   
  }

  constructor() { }

  ngOnInit() {
  }
}
