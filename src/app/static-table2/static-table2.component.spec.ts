import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTable2Component } from './static-table2.component';

describe('StaticTable2Component', () => {
  let component: StaticTable2Component;
  let fixture: ComponentFixture<StaticTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
