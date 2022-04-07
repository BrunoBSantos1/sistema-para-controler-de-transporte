import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetePassawordComponent } from './resete-passaword.component';

describe('ResetePassawordComponent', () => {
  let component: ResetePassawordComponent;
  let fixture: ComponentFixture<ResetePassawordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetePassawordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetePassawordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
