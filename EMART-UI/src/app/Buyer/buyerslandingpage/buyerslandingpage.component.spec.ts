import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerslandingpageComponent } from './buyerslandingpage.component';

describe('BuyerslandingpageComponent', () => {
  let component: BuyerslandingpageComponent;
  let fixture: ComponentFixture<BuyerslandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerslandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerslandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
