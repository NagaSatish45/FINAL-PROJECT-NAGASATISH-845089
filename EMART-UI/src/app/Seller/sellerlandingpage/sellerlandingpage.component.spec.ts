import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerlandingpageComponent } from './sellerlandingpage.component';

describe('SellerlandingpageComponent', () => {
  let component: SellerlandingpageComponent;
  let fixture: ComponentFixture<SellerlandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerlandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerlandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
