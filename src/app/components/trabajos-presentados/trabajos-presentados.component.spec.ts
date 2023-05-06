import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosPresentadosComponent } from './trabajos-presentados.component';

describe('TrabajosPresentadosComponent', () => {
  let component: TrabajosPresentadosComponent;
  let fixture: ComponentFixture<TrabajosPresentadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajosPresentadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajosPresentadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
