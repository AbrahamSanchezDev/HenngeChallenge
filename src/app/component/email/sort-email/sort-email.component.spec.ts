import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortEmailComponent } from './sort-email.component';

describe('SortEmailComponent', () => {
  let component: SortEmailComponent;
  let fixture: ComponentFixture<SortEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
