import { CounterComponent } from './counter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    // fixture.debugElement
    // fixture.nativeElement
  });
  it('should be created', () => {
    expect(component).toBeDefined();
  });
  it('should render counter property', () => {
    let num = 45;
    component.counter = num;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.counter'));
    let el: HTMLElement = de.nativeElement;

    expect(el.textContent).toContain(num.toString());
  });

  it('should add green class if counter is even', () => {
    component.counter = 6;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.counter'));
    let el: HTMLElement = de.nativeElement;

    expect(el.classList.contains('green')).toBeTruthy();
  });
  it('should increment counter if increment buttun was clicked', () => {
    let btn = fixture.debugElement.query(By.css('#increment'))
    btn.triggerEventHandler('click', null)
    expect(component.counter).toBe(1)
  })
});
