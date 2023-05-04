import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionComponent } from './create-question.component';

describe('CreateQuestionComponent', () => {
  let component: CreateQuestionComponent;
  let fixture: ComponentFixture<CreateQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CreateQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
