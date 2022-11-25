import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProInterComponent } from './pro-inter.component';

describe('ProInterComponent', () => {
  let component: ProInterComponent;
  let fixture: ComponentFixture<ProInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProInterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
