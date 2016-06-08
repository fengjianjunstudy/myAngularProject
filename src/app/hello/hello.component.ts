import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/observable/of';




@Component({
  moduleId: module.id,
  selector: 'app-hello',
  templateUrl: 'hello.component.html',
  styleUrls: ['hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    let result = Observable.create((subscriber) => {
      subscriber.next(Math.random());
      subscriber.next(Math.random());
      subscriber.next(Math.random());
      subscriber.complete();
    });
    result.subscribe(x => {
      console.log(x);
    })
  }

}
