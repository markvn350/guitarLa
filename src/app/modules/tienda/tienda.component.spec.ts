import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaComponent } from './tienda.component';

describe('TiendaComponent', () => {
  let component: TiendaComponent;
  let fixture: ComponentFixture<TiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TiendaComponent]
    });
    fixture = TestBed.createComponent(TiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
