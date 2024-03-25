import { ComponentFixture, TestBed } from '@angular/core/testing';

import { chatPageComponent } from './chatPage.component';

describe('InicioComponent', () => {
  let component: chatPageComponent;
  let fixture: ComponentFixture<chatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ chatPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(chatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
