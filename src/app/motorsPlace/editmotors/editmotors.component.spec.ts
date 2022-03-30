import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmotorsComponent } from './editmotors.component';

describe('EditmotorsComponent', () => {
  let component: EditmotorsComponent;
  let fixture: ComponentFixture<EditmotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmotorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
