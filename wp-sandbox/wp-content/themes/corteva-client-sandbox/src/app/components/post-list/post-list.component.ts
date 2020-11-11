import { Component, OnInit } from '@angular/core';
import { RestAPIService } from 'src/app/services/rest-api.service';
// import { PostListSingleComponent } from './post-list-single/post-list-single.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts: any;
  constructor(private api: RestAPIService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.api.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

}
