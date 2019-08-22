import { Component } from '@angular/core';

@Component({
  selector: 'ngx-one-column',
  styleUrls: ['./one-column.component.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class OneColumnComponent {

}
