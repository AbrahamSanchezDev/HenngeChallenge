import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMetaDataDisplayComponent } from './email-meta-data-display.component';
import { testingEmail } from 'src/app/model/email/email.module';

describe('EmailMetaDataDisplayComponent', () => {
  let component: EmailMetaDataDisplayComponent;
  let fixture: ComponentFixture<EmailMetaDataDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailMetaDataDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailMetaDataDisplayComponent);
    component = fixture.componentInstance;
    component.email = testingEmail;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Test that it returns the date of the email
  it('should return the date in the email', () => {
    expect(component.getEmailDate()).toContain('2020');
  });
  //Test if it returns if the email has some file in it
  it('should returns true because the testing email has one file', () => {
    expect(component.hasFiles()).toBeTrue();
  });
});
