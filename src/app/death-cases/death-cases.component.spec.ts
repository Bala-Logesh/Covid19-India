import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathCasesComponent } from './death-cases.component';

describe('DeathCasesComponent', () => {
  let component: DeathCasesComponent;
  let fixture: ComponentFixture<DeathCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
