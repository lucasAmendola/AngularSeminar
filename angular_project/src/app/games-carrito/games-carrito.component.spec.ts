import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCarritoComponent } from './games-carrito.component';

describe('GamesCarritoComponent', () => {
  let component: GamesCarritoComponent;
  let fixture: ComponentFixture<GamesCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesCarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
