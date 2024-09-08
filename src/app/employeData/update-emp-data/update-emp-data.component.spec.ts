import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpDataComponent } from './update-emp-data.component';

describe('UpdateEmpDataComponent', () => {
  let component: UpdateEmpDataComponent;
  let fixture: ComponentFixture<UpdateEmpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEmpDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
