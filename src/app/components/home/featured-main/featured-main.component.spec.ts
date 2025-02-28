import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMainComponent } from './featured-main.component';

describe('FeaturedMainComponent', () => {
  let component: FeaturedMainComponent;
  let fixture: ComponentFixture<FeaturedMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
