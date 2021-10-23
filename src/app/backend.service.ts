import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getArticle() {
    return this.http.get<Article[]>('/api/articles.json');
  }

}
