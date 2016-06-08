import { Component } from '@angular/core';

import { HelloComponent } from './hello/index'
@Component({
  moduleId: module.id,
  selector: 'my-angular-project-app',
  templateUrl: 'my-angular-project.component.html',
  styleUrls: ['my-angular-project.component.css'],
  directives:[HelloComponent]
})
export class MyAngularProjectAppComponent {
  title = 'my-angular-project works!';
}
