import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveViewsComponent } from './reserve-views.component';

describe('ReserveViewsComponent', () => {
  let component: ReserveViewsComponent;
  let fixture: ComponentFixture<ReserveViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
