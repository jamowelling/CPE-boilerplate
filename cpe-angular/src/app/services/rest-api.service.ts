import { Injectable } from '@angular/core';
import { WindowService } from './window.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  private api_url: any;
  constructor(private win: WindowService, private http: HttpClient) {
    this.api_url = this.win.nativeWindow.api_settings
      ? this.win.nativeWindow.api_settings.root + 'wp/v2/'
      : 'http://localhost:8000/wp-json/wp/v2/';
  }

  getAll() {
    return this.http.get(this.api_url);
  }

  getPages() {
    return this.http.get(this.api_url + 'pages')
  }

  getPageById(page_id) {
    return this.http.get(this.api_url + 'pages/' + page_id);
  }

  getPageBySlug(page_id) {
    return this.http.get(this.api_url + 'pages/?slug=' + page_id);
  }

  getPreview(parent_id, wpnonce) {
    return this.http.get(this.api_url + `pages/${parent_id}/revisions?_wpnonce=${wpnonce}`, { withCredentials: true });
  }

  searchByTerm(term) {
    return this.http.get(this.api_url + 'search?search=' + term);
  }
}
