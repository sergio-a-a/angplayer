import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngplayerComponent } from './angplayer.component';

describe('AngplayerComponent', () => {
  let component: AngplayerComponent;
  let fixture: ComponentFixture<AngplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
