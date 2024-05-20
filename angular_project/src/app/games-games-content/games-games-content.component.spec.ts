import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesGamesContentComponent } from './games-games-content.component';

describe('GamesGamesContentComponent', () => {
  let component: GamesGamesContentComponent;
  let fixture: ComponentFixture<GamesGamesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesGamesContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesGamesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
