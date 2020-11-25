import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Link, Video} from "../../model";

@Component({
  selector: 'app-image-content-block',
  templateUrl: './image-content-block.component.html',
  styleUrls: ['./image-content-block.component.scss']
})
export class ImageContentBlockComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() textContentIconEnabled: boolean;
  @Input() textContentIcon: string;
  @Input() textContentHeadlineEnabled: boolean;
  @Input() textContentHeadline: string;
  @Input() textContentSubHeadingEnabled: boolean;
  @Input() textContentSubHeading: string;
  @Input() textContentBodyEnabled: boolean;
  @Input() textContentBody: string;
  @Input() mediaAlignment: string;
  @Input() imageSrc: string;
  @Input() videoEnabled: boolean;
  @Input() video: Video;
  @Input() callToActionEnabled: boolean;
  @Input() callToActionText: string;
  @Input() callToActionLocation: string;
  @Input() callToActionButtonColor: string;
  @Input() callToActionButtonTextColor: string;
  @Input() linksEnabled: boolean;
  @Input() links: Link[];

  @ViewChild("imageElement", {read: ElementRef}) imageElement: ElementRef;
  @ViewChild("videoElement", {read: ElementRef}) videoElement: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  chunk(array: any[], size: number): any[][] {
    const chunkedArray = [];
    const copied = [...array];
    const numOfChild = Math.ceil(copied.length / size);
    for (let i = 0; i < numOfChild; i++) {
      chunkedArray.push(copied.splice(0, size));
    }
    return chunkedArray;
  }

  flexDirection(): string {
    return this.mediaAlignment === 'right' ? 'row-reverse' : 'row';
  }

  isEmpty(value: string): boolean {
    return !value || value.length === 0 || !value.trim().replace(/(<([^>]+)>)/gi, '');
  }

  imageClicked(): void {
    this.imageElement.nativeElement.style.display = 'none';
    this.videoElement.nativeElement.play();
    this.videoElement.nativeElement.controls = true;
  }
}
