import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperElementsComponent } from './paper-elements.component';

describe('PaperElementsComponent', () => {
  let component: PaperElementsComponent;
  let fixture: ComponentFixture<PaperElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
