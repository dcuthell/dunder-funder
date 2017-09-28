import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElbumComponent } from './edit-elbum.component';

describe('EditElbumComponent', () => {
  let component: EditElbumComponent;
  let fixture: ComponentFixture<EditElbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
