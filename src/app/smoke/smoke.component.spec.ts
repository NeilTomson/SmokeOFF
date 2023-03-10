import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeComponent } from './smoke.component';

describe('SmokeComponent', () => {
  let component: SmokeComponent;
  let fixture: ComponentFixture<SmokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
