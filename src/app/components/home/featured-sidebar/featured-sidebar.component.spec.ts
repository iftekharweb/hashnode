import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSidebarComponent } from './featured-sidebar.component';

describe('FeaturedSidebarComponent', () => {
  let component: FeaturedSidebarComponent;
  let fixture: ComponentFixture<FeaturedSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
