import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmpDataComponent } from './show-emp-data.component';

describe('ShowEmpDataComponent', () => {
  let component: ShowEmpDataComponent;
  let fixture: ComponentFixture<ShowEmpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowEmpDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEmpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
