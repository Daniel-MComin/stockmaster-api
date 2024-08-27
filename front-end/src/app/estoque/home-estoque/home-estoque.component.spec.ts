import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEstoqueComponent } from './home-estoque.component';

describe('HomeEstoqueComponent', () => {
  let component: HomeEstoqueComponent;
  let fixture: ComponentFixture<HomeEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeEstoqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
