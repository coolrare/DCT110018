import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements  OnChanges {

  tmp = null;

  @Input() item!: Article;

  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let a = changes['item'].previousValue;
    let b = changes['item'].currentValue;
  }

  doDelete() {
    this.delete.emit(this.item.id);
  }

}
