import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortEmailComponent } from './sort-email.component';
import { HttpClientModule } from '@angular/common/http';

describe('SortEmailComponent', () => {
  let component: SortEmailComponent;
  let fixture: ComponentFixture<SortEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortEmailComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Test if retuns the asked option
  it('should have options', () => {
    expect(component.getOption(0).text).toContain('From');
    expect(component.getOption(1).text).toContain('To');
    expect(component.getOption(2).text).toContain('Subject');
    expect(component.getOption(3).text).toContain('Date');
  });
});
