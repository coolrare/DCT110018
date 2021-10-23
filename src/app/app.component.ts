import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DCT110018';
  keyword = '123';

  result = '';

  data: any[] = [];

  constructor(private http: HttpClient) {
    http.get<any[]>('/api/articles.json').subscribe({
      next: (data) => {
        this.data = data;
      },
      error: () => {},
      complete: () => {}
    });
  }

  doSearch(value: string) {
    this.result = value;
  }
}
