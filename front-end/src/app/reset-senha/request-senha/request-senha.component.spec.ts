import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSenhaComponent } from './request-senha.component';

describe('RequestSenhaComponent', () => {
  let component: RequestSenhaComponent;
  let fixture: ComponentFixture<RequestSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestSenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
