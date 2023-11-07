import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinrecetapiPage } from './sinrecetapi.page';

describe('SinrecetapiPage', () => {
  let component: SinrecetapiPage;
  let fixture: ComponentFixture<SinrecetapiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SinrecetapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
