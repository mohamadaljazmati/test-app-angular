import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  products: Product[] = [];


  constructor(private productService: DataService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.productService.getItems()
      .subscribe(items => this.products = items);

    console.log(this.products);
  }
  update(item: Product): void {
    console.log(this.products);
  }
 
}
