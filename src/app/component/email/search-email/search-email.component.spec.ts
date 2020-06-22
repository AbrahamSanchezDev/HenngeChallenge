import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmailComponent } from './search-email.component';
import { HttpClientModule } from '@angular/common/http';

describe('SearchEmailComponent', () => {
  let component: SearchEmailComponent;
  let fixture: ComponentFixture<SearchEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchEmailComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Test that returns the current amount of results
  it('should return 0 in the text of how many results there are', () => {
    expect(component.getCurrentResults()).toBe('Results: 0 mail(s)');
  });
});
