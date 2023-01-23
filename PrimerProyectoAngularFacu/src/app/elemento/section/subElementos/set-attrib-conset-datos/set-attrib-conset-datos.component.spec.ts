import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAttribConsetDatosComponent } from './set-attrib-conset-datos.component';

describe('SetAttribConsetDatosComponent', () => {
  let component: SetAttribConsetDatosComponent;
  let fixture: ComponentFixture<SetAttribConsetDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetAttribConsetDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetAttribConsetDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
