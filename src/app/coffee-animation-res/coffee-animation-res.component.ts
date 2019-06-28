import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';
import { getCupStatus, getParams } from '../store/selectors/machine.selectors';
import { getRunningStatus } from '../store/selectors/machine.selectors';
import { Observable, Subscription } from 'rxjs';
import { IAppState } from '../store/state/app.state';
import { Store } from '@ngrx/store';
import { ICoffeeParams } from '../models/coffeeParams.interface';



@Component({
  selector: 'app-coffee-animation-res',
  templateUrl: './coffee-animation-res.component.html',
  styleUrls: ['./coffee-animation-res.component.css']
})
export class CoffeeAnimationResComponent implements OnInit {

  runningStatus$: Observable<boolean>;
  currentRunningStatus: Subscription;

  constructor(private _store: Store<IAppState>) {
    this.runningStatus$ = this._store.select(getRunningStatus);
    this.currentRunningStatus = this.runningStatus$.subscribe(val => this.startBrewing(val));

  }

  ngOnInit() {

  }

  startBrewing(val) {
    if (val === true) {

      const elements = document.querySelector('.sugarpack');

      anime({
        targets: elements,
        translateY: 170,
        borderColor: '#FFF',
      });

      setTimeout(() => {
        const elements = document.querySelectorAll('.coffee');
        anime({
          targets: elements,
          translateY: 170,
          duration: 400,
          backgroundColor: '#663300',
          loop: true,
          easing: 'easeInOutQuad',
          delay: function(el, i, l) {
            return i * 100;
          },
          endDelay: function(el, i, l) {
            return (l - i) * 100;
          }
        });
      }, 2000);
    }
  }
}
