import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexWrapperComponent } from './flex-wrapper.component';

describe('FlexWrapperComponent', () => {
  let component: FlexWrapperComponent;
  let fixture: ComponentFixture<FlexWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
