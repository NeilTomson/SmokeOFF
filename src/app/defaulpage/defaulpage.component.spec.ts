import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulpageComponent } from './defaulpage.component';

describe('DefaulpageComponent', () => {
  let component: DefaulpageComponent;
  let fixture: ComponentFixture<DefaulpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaulpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaulpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
