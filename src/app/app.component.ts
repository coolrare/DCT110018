import { Component } from '@angular/core';
import { BackendService } from './backend.service';

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

  constructor(private backend: BackendService) {
    backend.getArticle().subscribe({
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

  deleteArticle(id: number) {
    console.log("Delete Article ID: " + id);
  }
}
