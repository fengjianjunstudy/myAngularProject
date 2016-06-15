import { Component } from '@angular/core';
import { AboutComponent } from './+about';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { HelloComponent } from './hello/index'
@Component({
  moduleId: module.id,
  selector: 'my-angular-project-app',
  templateUrl: 'my-angular-project.component.html',
  styleUrls: ['my-angular-project.component.css'],
  directives:[HelloComponent,ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {
    path: '/about',
    component: AboutComponent
  }
])
export class MyAngularProjectAppComponent {
  title = 'my-angular-project works!';
}
