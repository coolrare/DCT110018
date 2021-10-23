import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  data$: Observable<any[]> = of([]);

  constructor(private backend: BackendService) {
    this.data$ = backend.getArticle();
  }

  doSearch(value: string) {
    this.result = value;
  }

  deleteArticle(id: number) {
    console.log("Delete Article ID: " + id);
  }
}
