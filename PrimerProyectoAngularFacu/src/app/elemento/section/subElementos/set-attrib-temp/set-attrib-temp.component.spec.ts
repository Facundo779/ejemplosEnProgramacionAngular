import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAttribTempComponent } from './set-attrib-temp.component';

describe('SetAttribTempComponent', () => {
  let component: SetAttribTempComponent;
  let fixture: ComponentFixture<SetAttribTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetAttribTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetAttribTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
