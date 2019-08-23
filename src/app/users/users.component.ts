import { Component } from '@angular/core';

@Component({
  selector: 'ngx-users',

  styleUrls: ['./users.component.scss'],
  template: `
      <ngx-one-column>
        <router-outlet></router-outlet>
      </ngx-one-column>
`,
})
export class UsersComponent {

}
