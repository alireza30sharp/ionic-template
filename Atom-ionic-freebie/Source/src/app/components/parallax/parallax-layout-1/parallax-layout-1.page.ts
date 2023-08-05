import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'parallax-layout-1',
  templateUrl: './parallax-layout-1.page.html',
  styleUrls: ['./parallax-layout-1.page.scss'],
})
export class ParallaxLayout1Page implements OnChanges {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();
  @Output() onAddToCart = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onAddToCartFunc(params,event) {
    if (event) {
      event.stopPropagation();
    }
    this.onAddToCart.emit(params);
  }
  
  onItemClickFunc(params,event:any) {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(params);
  }
}
