import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MyAngularProjectAppComponent } from '../app/my-angular-project.component';

beforeEachProviders(() => [MyAngularProjectAppComponent]);

describe('App: MyAngularProject', () => {
  it('should create the app',
      inject([MyAngularProjectAppComponent], (app: MyAngularProjectAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'my-angular-project works!\'',
      inject([MyAngularProjectAppComponent], (app: MyAngularProjectAppComponent) => {
    expect(app.title).toEqual('my-angular-project works!');
  }));
});
