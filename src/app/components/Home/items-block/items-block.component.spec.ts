import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsBlockComponent } from './items-block.component';

describe('ItemsBlockComponent', () => {
  let component: ItemsBlockComponent;
  let fixture: ComponentFixture<ItemsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
