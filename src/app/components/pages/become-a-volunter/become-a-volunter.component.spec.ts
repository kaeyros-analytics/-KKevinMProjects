import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAVolunterComponent } from './become-a-volunter.component';

describe('ExecutiveBoardComponent', () => {
  let component: BecomeAVolunterComponent;
  let fixture: ComponentFixture<BecomeAVolunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeAVolunterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeAVolunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
