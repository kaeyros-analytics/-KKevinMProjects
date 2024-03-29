import { ComponentFixture, TestBed } from '@angular/core/testing';

import { breadcrumbsComponent } from './breadcrumbs.component';

describe('breadcrumbsComponent', () => {
  let component: breadcrumbsComponent;
  let fixture: ComponentFixture<breadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ breadcrumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(breadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
