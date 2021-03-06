import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDefaultComponent } from './home-default.component';
import { AppModule } from '../app.module';
import { DynamicComponent } from '../dynamic/dynamic.component';

describe('HomeDefaultComponent', () => {
  let component: HomeDefaultComponent;
  let fixture: ComponentFixture<HomeDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
