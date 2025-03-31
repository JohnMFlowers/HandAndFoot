import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRoundComponent } from './round.component';

describe('PlayerRoundComponent', () => {
  let component: PlayerRoundComponent;
  let fixture: ComponentFixture<PlayerRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerRoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
