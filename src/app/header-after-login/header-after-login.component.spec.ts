import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAfterLoginComponent } from './header-after-login.component';

describe('HeaderAfterLoginComponent', () => {
  let component: HeaderAfterLoginComponent;
  let fixture: ComponentFixture<HeaderAfterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAfterLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
