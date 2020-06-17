import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortEmailOptionComponent } from './sort-email-option.component';

describe('SortEmailOptionComponent', () => {
  let component: SortEmailOptionComponent;
  let fixture: ComponentFixture<SortEmailOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortEmailOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortEmailOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
