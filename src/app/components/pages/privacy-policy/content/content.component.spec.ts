import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenschutzerklRungComponent } from './content.component';

describe('ContentComponent', () => {
  let component: DatenschutzerklRungComponent;
  let fixture: ComponentFixture<DatenschutzerklRungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatenschutzerklRungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenschutzerklRungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
