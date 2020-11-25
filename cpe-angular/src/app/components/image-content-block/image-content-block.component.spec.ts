import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageContentBlockComponent} from './image-content-block.component';
import {Link, Video} from "../../model";

describe('ImageContentBlockComponent', () => {
  let component: ImageContentBlockComponent;
  let fixture: ComponentFixture<ImageContentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageContentBlockComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /***
   *  Function Unit Tests
   */

  it('should return row-reverse', () => {
    component.mediaAlignment = 'right';
    expect(component.flexDirection()).toBe('row-reverse');
  });

  it('should return row', () => {
    component.mediaAlignment = 'left';
    expect(component.flexDirection()).toBe('row');
  });

  it('should return chunked array in sets of 2', () => {
    expect(component.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))
      .toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
  });

  it('should return chunked array in sets of 2 with a remainder of 1', () => {
    expect(component.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2))
      .toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11]]);
  });

  it('should return true with input undefined', () => {
    expect(component.isEmpty(undefined)).toBe(true);
  });

  it('should return true with input null', () => {
    expect(component.isEmpty(null)).toBe(true);
  });

  it('should return true with blank string', () => {
    expect(component.isEmpty('')).toBe(true);
  });

  it('should return true with empty html', () => {
    expect(component.isEmpty('<a></a>')).toBe(true);
  });

  it('should return false with string with at least one length', () => {
    expect(component.isEmpty('a')).toBe(false);
  });

  /***
   *  UI Unit Tests
   */

  // General

  it('should have container background as "#000000"', () => {
    component.backgroundColor = '#000000';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const container: HTMLElement = root.querySelector('.image-content-block-container');
    expect(container.style.background).toEqual('rgb(0, 0, 0)');
  });

  it('should have container flex-direction as row-reverse', () => {
    component.mediaAlignment = 'right';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const container: HTMLElement = root.querySelector('.image-content-block-container');
    expect(container.style['flex-direction']).toEqual('row-reverse');
  });

  it('should have container flex-direction as row', () => {
    component.mediaAlignment = 'left';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const container: HTMLElement = root.querySelector('.image-content-block-container');
    expect(container.style['flex-direction']).toEqual('row');
  });

  // Icon

  it('should not have icon show omitting all variables', () => {
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-icon')).toEqual(null);
  });

  it('should not have icon show with icon disabled', () => {
    component.textContentIconEnabled = false;
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-icon')).toEqual(null);
  });

  it('should not have icon show with empty icon', () => {
    component.textContentIconEnabled = true;
    component.textContentIcon = '';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-icon')).toEqual(null);
  });

  it('should have icon show with icon enabled and non-empty icon', () => {
    component.textContentIconEnabled = true;
    component.textContentIcon = 'fa-cog';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-icon')).toBeTruthy();
  });

  // Headline

  it('should not have headline show omitting all variables', () => {
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-header')).toEqual(null);
  });

  it('should not have headline show with headline disabled', () => {
    component.textContentHeadlineEnabled = false;
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-header')).toEqual(null);
  });

  it('should not have headline show with empty headline text content', () => {
    component.textContentHeadlineEnabled = true;
    component.textContentHeadline = '';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-header')).toEqual(null);
  });

  it('should not have headline show with empty headline html content', () => {
    component.textContentHeadlineEnabled = true;
    component.textContentHeadline = '<h1></h1>';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-header')).toEqual(null);
  });

  it('should have headline show with headline enabled and non-empty text content', () => {
    component.textContentHeadlineEnabled = true;
    component.textContentHeadline = 'Text';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-header')).toBeTruthy();
  });

  it('should be able to set headline text content to "Test Headline"', () => {
    component.textContentHeadlineEnabled = true;
    component.textContentHeadline = 'Test Headline';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-header').textContent).toEqual('Test Headline');
  });

  it('should be able to set headline inner html to "<h1>TestContent</h1>"', () => {
    component.textContentHeadlineEnabled = true;
    component.textContentHeadline = '<h1>TestContent</h1>';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-header').innerHTML).toEqual('<h1>TestContent</h1>');
  });

  // Sub Header

  it('should not have sub header show omitting all variables', () => {
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-sub-header')).toEqual(null);
  });

  it('should not have sub header show with sub header not enabled', () => {
    component.textContentSubHeadingEnabled = false;
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-sub-header')).toEqual(null);
  });

  it('should not have sub header show with empty sub header text content', () => {
    component.textContentSubHeadingEnabled = true;
    component.textContentSubHeading = '';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-header')).toEqual(null);
  });

  it('should have sub header show with sub header enabled and non-empty text content', () => {
    component.textContentSubHeadingEnabled = true;
    component.textContentSubHeading = 'Text';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-sub-header')).toBeTruthy();
  });

  it('should be able to set sub header text content to "Test Sub Header"', () => {
    component.textContentSubHeadingEnabled = true;
    component.textContentSubHeading = 'Test Sub Header';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-sub-header').textContent).toEqual('Test Sub Header');
  });

  // Body

  it('should not have body show omitting all variables', () => {
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-body')).toEqual(null);
  });

  it('should not have body show with body not enabled', () => {
    component.textContentBodyEnabled = false;
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-body')).toEqual(null);
  });

  it('should not have body show with empty body text content', () => {
    component.textContentBodyEnabled = true;
    component.textContentBody = '';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-body')).toEqual(null);
  });

  it('should have body show with body enabled and non-empty text content', () => {
    component.textContentBodyEnabled = true;
    component.textContentBody = 'Text';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-body')).toBeTruthy();
  });

  it('should be able to set body text content to "Test Body"', () => {
    component.textContentBodyEnabled = true;
    component.textContentBody = 'Test Body';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-body').textContent).toEqual('Test Body');
  });

  // Call to Action

  it('should not have call to action show omitting all variables', () => {
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-call-to-action')).toEqual(null);
  });

  it('should not have call to action show with call to action not enabled', () => {
    component.callToActionEnabled = false;
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-call-to-action')).toEqual(null);
  });

  it('should not have call to action show with call to action enabled and empty text content', () => {
    component.callToActionEnabled = true;
    component.callToActionText = '';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-call-to-action')).toEqual(null);
  });

  it('should have call to action show with call to action enabled and non-empty text content', () => {
    component.callToActionEnabled = true;
    component.callToActionText = 'Text';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-call-to-action')).toBeTruthy();
  });

  it('should be able to set call to action text content to "Test Call To Action"', () => {
    component.callToActionEnabled = true;
    component.callToActionText = 'Test Call To Action';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-call-to-action').textContent).toEqual('Test Call To Action');
  });

  it('should be able to set call to action background to "#000000"', () => {
    component.callToActionEnabled = true;
    component.callToActionText = 'Text';
    component.callToActionButtonColor = '#000000';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const callToAction: HTMLElement = root.querySelector('.image-content-block-call-to-action');
    expect(callToAction.style.background).toEqual('rgb(0, 0, 0)');
  });

  it('should be able to set call to action text color to "#000000"', () => {
    component.callToActionEnabled = true;
    component.callToActionText = 'Text';
    component.callToActionButtonTextColor = '#000000';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const callToAction: HTMLElement = root.querySelector('.image-content-block-call-to-action');
    expect(callToAction.style.color).toEqual('rgb(0, 0, 0)');
  });

  it('should be able to set call to action href to "test-href"', () => {
    component.callToActionEnabled = true;
    component.callToActionText = 'Text';
    component.callToActionLocation = 'test-href';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const callToAction: HTMLElement = root.querySelector('.image-content-block-call-to-action');
    expect(callToAction.getAttribute('href')).toEqual('test-href');
  });

  // Links

  it('should not have links show omitting all variables', () => {
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-links')).toEqual(null);
  });

  it('should not have links enabled', () => {
    component.linksEnabled = false;
    component.links = [];
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-links')).toEqual(null);
  });

  it('should have links enabled', () => {
    component.linksEnabled = true;
    component.links = [];
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-links')).toBeTruthy();
  });

  it('should be able to set link href', () => {
    component.linksEnabled = true;
    component.links = [
      new Link('text', 'link'),
    ];
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const link: HTMLElement = root.querySelector('.image-content-block-link');
    expect(link.getAttribute('href')).toEqual('link');
  });

  it('should be able to set link text content', () => {
    component.linksEnabled = true;
    component.links = [
      new Link('text', 'link'),
    ];
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const link: HTMLElement = root.querySelector('.image-content-block-link');
    expect(link.textContent).toEqual('text');
  });

  it('should be able to add multiple links', () => {
    component.linksEnabled = true;
    component.links = [
      new Link('text', 'link'),
      new Link('text', 'link'),
    ];
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const links: NodeListOf<HTMLElement> = root.querySelectorAll('.image-content-block-link');
    expect(links.length).toEqual(2);
  });

  // Image

  it('should be able to set image source', () => {
    component.imageSrc = 'image source';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const image: HTMLElement = root.querySelector('.image-content-block-image');
    expect(image.getAttribute('src')).toEqual('image source');
  });

  it('should have pointer when video source is not empty', () => {
    component.video = new Video(
      'name',
      'title',
      'icon',
      'video/mp4',
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    );
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const image: HTMLElement = root.querySelector('.image-content-block-image');
    expect(image.style.cursor).toEqual('pointer');
  });

  it('should not have pointer when video source is empty', () => {
    component.video = null;
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const image: HTMLElement = root.querySelector('.image-content-block-image');
    expect(image.style.cursor).toEqual('inherit');
  });

  it('should have onclick function when video source is not empty', () => {
    component.video = new Video(
      'name',
      'title',
      'icon',
      'video/mp4',
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    );
    fixture.detectChanges();
    spyOn(component, 'imageClicked');
    const root: HTMLElement = fixture.nativeElement;
    const image: HTMLElement = root.querySelector('.image-content-block-image');
    image.click();
    fixture.detectChanges();
    expect(component.imageClicked).toHaveBeenCalled();
  });

  it('should not have onclick function when video source is empty', () => {
    component.video = null;
    fixture.detectChanges();
    spyOn(component, 'imageClicked');
    const root: HTMLElement = fixture.nativeElement;
    const image: HTMLElement = root.querySelector('.image-content-block-image');
    image.click();
    fixture.detectChanges();
    expect(component.imageClicked).not.toHaveBeenCalled();
  });

  // Video

  it('should not have video show omitting all variables', () => {
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-video')).toEqual(null);
  });

  it('should not have video show with video not enabled', () => {
    component.videoEnabled = false;
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-video')).toEqual(null);
  });

  it('should have video show with video enabled and non empty video', () => {
    component.videoEnabled = true;
    component.video = new Video(
      'name',
      'title',
      'icon',
      'video/mp4',
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    );
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.image-content-block-video')).toBeTruthy();
  });

  it('should be able to set video source', () => {
    component.videoEnabled = true;
    component.video = new Video(
      'name',
      'title',
      'icon',
      'video/mp4',
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    );
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const videoSource: HTMLElement = root.querySelector('.image-content-block-source');
    expect(videoSource.getAttribute('src'))
      .toEqual('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
  });

  it('should be able to set video mime type', () => {
    component.videoEnabled = true;
    component.video = new Video(
      'name',
      'title',
      'icon',
      'video/mp4',
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    );
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const videoSource: HTMLElement = root.querySelector('.image-content-block-source');
    expect(videoSource.getAttribute('type')).toEqual('video/mp4');
  });

  it('should be able to click the overlay image and the image clicked function is called', () => {
    component.videoEnabled = true;
    component.video = new Video(
      'name',
      'title',
      'icon',
      'video/mp4',
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    );
    fixture.detectChanges();
    spyOn(component, 'imageClicked');
    const root: HTMLElement = fixture.nativeElement;
    const image: HTMLElement = root.querySelector('.image-content-block-image');
    image.click();
    fixture.detectChanges();
    expect(component.imageClicked).toHaveBeenCalled();
  });

  // TODO: Video Stream?

});
