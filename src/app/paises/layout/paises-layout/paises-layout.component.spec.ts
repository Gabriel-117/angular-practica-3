import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesLayoutComponent } from './paises-layout.component';

describe('PaisesLayoutComponent', () => {
  let component: PaisesLayoutComponent;
  let fixture: ComponentFixture<PaisesLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisesLayoutComponent]
    });
    fixture = TestBed.createComponent(PaisesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
