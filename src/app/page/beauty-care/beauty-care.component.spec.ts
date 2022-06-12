import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyCareComponent } from './beauty-care.component';

describe('BeautyCareComponent', () => {
  let component: BeautyCareComponent;
  let fixture: ComponentFixture<BeautyCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
