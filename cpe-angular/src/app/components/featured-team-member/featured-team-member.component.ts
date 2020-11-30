import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-featured-team-member',
  templateUrl: './featured-team-member.component.html',
  styleUrls: ['./featured-team-member.component.scss']
})
export class FeaturedTeamMemberComponent implements OnInit {
  @Input() textContentH1Enabled: boolean;
  @Input() textContentH1: string;
  @Input() textContentH2Enabled: boolean;
  @Input() textContentH2: string;
  @Input() textContentH3Enabled: boolean;
  @Input() textContentH3: string;
  @Input() textContentDescriptionEnabled: boolean;
  @Input() textContentDescription: string;
  @Input() imageSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

  isEmpty(value: string): boolean {
    return !value || value.length === 0 || !value.trim().replace(/(<([^>]+)>)/gi, '');
  }

}
