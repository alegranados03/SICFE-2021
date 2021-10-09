import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceComprobacionComponent } from './balance-comprobacion.component';

describe('BalanceComprobacionComponent', () => {
  let component: BalanceComprobacionComponent;
  let fixture: ComponentFixture<BalanceComprobacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceComprobacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceComprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
