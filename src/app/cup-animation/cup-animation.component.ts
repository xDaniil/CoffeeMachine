import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { getCupStatus } from '../store/selectors/machine.selectors';

@Component({
  selector: 'app-cup-animation',
  templateUrl: './cup-animation.component.html',
  styleUrls: ['./cup-animation.component.css']
})
export class CupAnimationComponent implements OnInit {

  cupStatus$: Observable<boolean>;

  constructor(private _store: Store<IAppState>) {
    this.cupStatus$ = this._store.select(getCupStatus);
   }

  ngOnInit() {

  }

}
