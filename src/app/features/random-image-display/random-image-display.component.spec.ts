import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomImageDisplayComponent } from './random-image-display.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('RandomImageDisplayComponent', () => {
  let component: RandomImageDisplayComponent;
  let fixture: ComponentFixture<RandomImageDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomImageDisplayComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomImageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
