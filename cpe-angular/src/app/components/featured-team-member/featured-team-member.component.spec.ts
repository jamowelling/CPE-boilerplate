import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTeamMemberComponent } from './featured-team-member.component';

describe('FeaturedTeamMemberComponent', () => {
  let component: FeaturedTeamMemberComponent;
  let fixture: ComponentFixture<FeaturedTeamMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedTeamMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /***
   *  UI Unit Tests
   */

  // H1

  it('should not have h1 show omitting all variables', () => {
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h1')).toEqual(null);
  });

  it('should not have h1 show with h1 disabled', () => {
    component.textContentH1Enabled = false;
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h1')).toEqual(null);
  });

  it('should not have h1 show with empty h1 text content', () => {
    component.textContentH1Enabled = true;
    component.textContentH1 = '';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h1')).toEqual(null);
  });

  it('should not have h1 show with empty h1 html content', () => {
    component.textContentH1Enabled = true;
    component.textContentH1 = '<h1></h1>';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h1')).toEqual(null);
  });

  it('should have h1 show with h1 enabled and non-empty text content', () => {
    component.textContentH1Enabled = true;
    component.textContentH1 = 'Text';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h1')).toBeTruthy();
  });

  it('should be able to set h1 text content to "Test h1"', () => {
    component.textContentH1Enabled = true;
    component.textContentH1 = 'Test h1';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h1').textContent).toEqual('Test h1');
  });

  it('should be able to set h1 inner html to "<h1>TestContent</h1>"', () => {
    component.textContentH1Enabled = true;
    component.textContentH1 = '<h1>TestContent</h1>';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h1').innerHTML).toEqual('<h1>TestContent</h1>');
  });

  // H2

  it('should not have h2 show omitting all variables', () => {
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h2')).toEqual(null);
  });

  it('should not have h2 show with h2 disabled', () => {
    component.textContentH2Enabled = false;
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h2')).toEqual(null);
  });

  it('should not have h2 show with empty h2 text content', () => {
    component.textContentH2Enabled = true;
    component.textContentH2 = '';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h2')).toEqual(null);
  });

  it('should not have h2 show with empty h2 html content', () => {
    component.textContentH2Enabled = true;
    component.textContentH2 = '<h2></h2>';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h2')).toEqual(null);
  });

  it('should have h2 show with h2 enabled and non-empty text content', () => {
    component.textContentH2Enabled = true;
    component.textContentH2 = 'Text';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h2')).toBeTruthy();
  });

  it('should be able to set h2 text content to "Test h2"', () => {
    component.textContentH2Enabled = true;
    component.textContentH2 = 'Test h2';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h2').textContent).toEqual('Test h2');
  });

  it('should be able to set h2 inner html to "<h2>TestContent</h2>"', () => {
    component.textContentH2Enabled = true;
    component.textContentH2 = '<h2>TestContent</h2>';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h2').innerHTML).toEqual('<h2>TestContent</h2>');
  });

  // H3

  it('should not have h3 show omitting all variables', () => {
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h3')).toEqual(null);
  });

  it('should not have h3 show with h3 disabled', () => {
    component.textContentH3Enabled = false;
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h3')).toEqual(null);
  });

  it('should not have h3 show with empty h3 text content', () => {
    component.textContentH3Enabled = true;
    component.textContentH3 = '';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h3')).toEqual(null);
  });

  it('should not have h3 show with empty h3 html content', () => {
    component.textContentH3Enabled = true;
    component.textContentH3 = '<h3></h3>';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h3')).toEqual(null);
  });

  it('should have h3 show with h3 enabled and non-empty text content', () => {
    component.textContentH3Enabled = true;
    component.textContentH3 = 'Text';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h3')).toBeTruthy();
  });

  it('should be able to set h3 text content to "Test h3"', () => {
    component.textContentH3Enabled = true;
    component.textContentH3 = 'Test h3';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h3').textContent).toEqual('Test h3');
  });

  it('should be able to set h3 inner html to "<h3>TestContent</h3>"', () => {
    component.textContentH3Enabled = true;
    component.textContentH3 = '<h3>TestContent</h3>';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-h3').innerHTML).toEqual('<h3>TestContent</h3>');
  });

  // Description

  it('should not have description show omitting all variables', () => {
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-description')).toEqual(null);
  });

  it('should not have description show with description not enabled', () => {
    component.textContentDescriptionEnabled = false;
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-description')).toEqual(null);
  });

  it('should not have description show with empty description text content', () => {
    component.textContentDescriptionEnabled = true;
    component.textContentDescription = '';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-description')).toEqual(null);
  });

  it('should have description show with description enabled and non-empty text content', () => {
    component.textContentDescriptionEnabled = true;
    component.textContentDescription = 'Text';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-description')).toBeTruthy();
  });

  it('should be able to set description text content to "Test Description"', () => {
    component.textContentDescriptionEnabled = true;
    component.textContentDescription = 'Test Description';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    expect(root.querySelector('.featured-team-member-block-description').textContent).toEqual('Test Description');
  });

  // Image

  it('should be able to set image source', () => {
    component.imageSrc = 'image source';
    fixture.detectChanges();
    const root: HTMLElement = fixture.nativeElement;
    const image: HTMLElement = root.querySelector('.featured-team-member-block-image');
    expect(image.getAttribute('src')).toEqual('image source');
  });
});
