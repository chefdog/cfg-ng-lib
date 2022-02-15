import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgNgLibComponent } from './cfg-ng-lib.component';

describe('CfgNgLibComponent', () => {
  let component: CfgNgLibComponent;
  let fixture: ComponentFixture<CfgNgLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfgNgLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgNgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
