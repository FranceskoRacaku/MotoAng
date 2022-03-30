import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemotorsComponent } from './createmotors.component';

describe('CreatemotorsComponent', () => {
  let component: CreatemotorsComponent;
  let fixture: ComponentFixture<CreatemotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemotorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
