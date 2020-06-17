import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDisplayComponent } from './email-display.component';
import { testingEmail } from 'src/app/model/email/email.module';

describe('EmailDisplayComponent', () => {
  let component: EmailDisplayComponent;
  let fixture: ComponentFixture<EmailDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDisplayComponent);
    component = fixture.componentInstance;

    component.email = testingEmail;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Test that it retuns the sender
  it('should return the sender of the email', () => {
    expect(component.getSender()).toContain('123');
  });
  //Test that it retuns the subject text
  it('should retunt the subject', () => {
    expect(component.getSubject()).toContain('subject');
  });
});
