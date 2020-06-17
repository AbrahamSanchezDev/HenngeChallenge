import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SortEmailOptionComponent } from './sort-email-option.component';
import { SortingData } from 'src/app/model/sorting/sorting-data';

describe('SortEmailOptionComponent', () => {
  let component: SortEmailOptionComponent;
  let fixture: ComponentFixture<SortEmailOptionComponent>;
  let option: SortingData;
  let testigTitle: string = 'Testing Title';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortEmailOptionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortEmailOptionComponent);
    component = fixture.componentInstance;
    option = {
      text: testigTitle,
      callback: null,
      active: false,
      increment: false,
    };
    component.option = option;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have the option', () => {
    expect(option).toBeTruthy();
  });

  //Test if the direction for the arro is oriented the correct way
  it('should return the sorting arrow direction', () => {
    expect(component.getSortDirection()).toBe(component.hiden);
    option.active = true;
    expect(component.getSortDirection()).toBe(component.inverse);
    option.increment = true;
    expect(component.getSortDirection()).toBe('');
  });
  //Test that the option has the correct title
  it('should return the option text', () => {
    expect(component.getText()).toBe(testigTitle);
  });
});
