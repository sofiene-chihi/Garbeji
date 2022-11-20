import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogBodyComponent } from './catalog-body.component';

describe('CatalogBodyComponent', () => {
  let component: CatalogBodyComponent;
  let fixture: ComponentFixture<CatalogBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
