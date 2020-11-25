import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpeArticleComponent } from './cpe-article.component';

describe('CpeArticleComponent', () => {
  let component: CpeArticleComponent;
  let fixture: ComponentFixture<CpeArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpeArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
