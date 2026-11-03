import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolitoComponent } from './solito-component';

describe('SolitoComponent', () => {
  let component: SolitoComponent;
  let fixture: ComponentFixture<SolitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolitoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolitoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
