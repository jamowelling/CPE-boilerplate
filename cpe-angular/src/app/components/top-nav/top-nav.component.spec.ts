import { HttpClientModule } from '@angular/common/http';
import { componentFactoryName } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavComponent } from './top-nav.component';

declare const viewport;
describe('TopNavComponent', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopNavComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Function Unit Tests
   */
  it('should create 6 anchor tags if given 6 valid Links', () => {
    component.links = new Array(6).fill({
      displayName: 'Test',
      href: 'https://www.test.com',
    });
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const desktopNav: HTMLElement = root.querySelector('.cpe-header--desktop');
    const mobileDrawer: HTMLElement = root.querySelector('.cpe-nav-drawer');
    const desktopAnchorElements: NodeListOf<Element> = desktopNav.querySelectorAll('.cpe-header__links-list__item a');
    const mobileAnchorElements: NodeListOf<Element> = mobileDrawer.querySelectorAll('.cpe-header__links-list__item a');

    expect(desktopAnchorElements.length).toBe(6);
    expect(mobileAnchorElements.length).toBe(6);
  });

  it('should only create links in the UI for valid links', () => {
    component.links = [
      {
        displayName: 'valid',
        href: 'https://www.valid.com',
      },
      {
        displayName: 'invalid',
        href: '',
      },
      {
        displayName: '',
        href: 'www.invalid.com',
      },
    ];
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const desktopNav: HTMLElement = root.querySelector('.cpe-header--desktop');
    const mobileDrawer: HTMLElement = root.querySelector('.cpe-nav-drawer');

    const desktopAnchorElements: NodeListOf<Element> = desktopNav.querySelectorAll('.cpe-header__links-list__item a');
    const mobileAnchorElements: NodeListOf<Element> = mobileDrawer.querySelectorAll('.cpe-header__links-list__item a');

    expect(desktopAnchorElements.length).toBe(1);
    expect(mobileAnchorElements.length).toBe(1);
  });
});
