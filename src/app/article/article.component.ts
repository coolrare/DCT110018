import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {

  @Input() item: any;

  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.item['abc'] = 1;
  }
  ngOnChanges(changes: SimpleChanges): void {
    let a = changes['item'].previousValue;
    let b = changes['item'].currentValue;
  }

  doDelete() {
    this.delete.emit(this.item.id);
  }

}
