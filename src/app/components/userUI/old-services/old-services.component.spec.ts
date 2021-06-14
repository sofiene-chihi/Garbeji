import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldServicesComponent } from './old-services.component';

describe('OldServicesComponent', () => {
  let component: OldServicesComponent;
  let fixture: ComponentFixture<OldServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
