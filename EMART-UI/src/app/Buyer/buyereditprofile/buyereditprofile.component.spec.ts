import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyereditprofileComponent } from './buyereditprofile.component';

describe('BuyereditprofileComponent', () => {
  let component: BuyereditprofileComponent;
  let fixture: ComponentFixture<BuyereditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyereditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyereditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
