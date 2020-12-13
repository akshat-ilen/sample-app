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

  private LegSubject = new Subject<any>()

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

  sendLeg(object) {
    this.LegSubject.next(object)
  }

  getLeg() : Observable<any> {
    return this.LegSubject.asObservable()
  }
  

}

import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private data$ = new BehaviorSubject<any> ({});

  constructor() {
    this.setData$(JSON.parse(JSON.stringify(localStorage)))
   }

  private setData$(data) {
    this.data$.next(data)
  }

  get(key): Observable<any> {
    return this.data$.asObservable().pipe(map(data => JSON.parse(data[key])))
  }

  set(key, value): void {
    value = JSON.stringify(value)
    const oldData = this.data$.value
    oldData[key] = value
    
    localStorage.setItem(key, value)

    this.setData$(oldData)
  }

  clear() {
    let lang = this.getValue('lang')
    localStorage.clear()
    this.setData$({})
    this.set('lang',lang)
  }

  getValue(key) {
    return JSON.parse(localStorage.getItem(key))
  }
}
