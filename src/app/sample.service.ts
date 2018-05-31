import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';


@Injectable()
export class SampleService {


  private subject = new Subject<any>()

  private disableSubject = new BehaviorSubject<any>({
    product : false,
    singleUnderlier : false,
    underlierSecurity : false,
    underlierType : false,
    underlier1 : false,
    underlier2 : false,
    inverseUnderlier : false,
    underlierSecurityVisibilty : true,
    productOption : false
  })

  sendMessage(message : Number) {
    this.subject.next({text : message})
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable()
  }

  sendDisable(object) {
    let previousValue = this.disableSubject.getValue()
    for(let key in object) {
      previousValue[key] = object[key]
    }
    this.disableSubject.next(previousValue)
  }

  getDisable() : Observable<any> {
    return this.disableSubject.asObservable()
  }
  

}
