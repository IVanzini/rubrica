import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricaPreviewComponent } from './rubrica-preview.component';

describe('RubricaPreviewComponent', () => {
  let component: RubricaPreviewComponent;
  let fixture: ComponentFixture<RubricaPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubricaPreviewComponent]
    });
    fixture = TestBed.createComponent(RubricaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
