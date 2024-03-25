import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredNameDialogComponent } from './stored-name-dialog.component';

describe('StoredNameDialogComponent', () => {
  let component: StoredNameDialogComponent;
  let fixture: ComponentFixture<StoredNameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoredNameDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
