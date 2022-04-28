import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendenComponent } from './spenden.component';

describe('AboutComponent', () => {
  let component: SpendenComponent;
  let fixture: ComponentFixture<SpendenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
