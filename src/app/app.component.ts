import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffeemachine';

  constructor(private _store: Store<IAppState>) {}
}
