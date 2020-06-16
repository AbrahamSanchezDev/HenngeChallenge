import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMetaDataDisplayComponent } from './email-meta-data-display.component';

describe('EmailMetaDataDisplayComponent', () => {
  let component: EmailMetaDataDisplayComponent;
  let fixture: ComponentFixture<EmailMetaDataDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailMetaDataDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailMetaDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
