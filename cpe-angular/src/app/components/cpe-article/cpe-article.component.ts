// import { Component, OnInit } from '@angular/core';
import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cpe-article',
  templateUrl: './cpe-article.component.html',
  styleUrls: ['./cpe-article.component.scss']
})
export class CpeArticleComponent implements OnInit {
  @Input() backgroundColor: string;

  constructor() { }

  ngOnInit(): void {
  }


}
