import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloadingpageComponent } from './adminloadingpage.component';

describe('AdminloadingpageComponent', () => {
  let component: AdminloadingpageComponent;
  let fixture: ComponentFixture<AdminloadingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminloadingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloadingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
