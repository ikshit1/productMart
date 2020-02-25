import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ProductModel } from '../service/data-service';

export interface ProductList {
  productName: string;
  productCategory: string;
  productPrice: number;
  productQuantity: number;
  id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  // <span>&#8377;</span>
  constructor(private navCtrl: NavController, private productModel: ProductModel) { }
  public productList: any = [];

  ngOnInit(): void {
  }

  ionViewWillEnter = () => {
    this.productList = [];
    if (localStorage.getItem('productData') !== null && localStorage.getItem('productData') !== undefined) {
      console.log('localStorage.getItem(', JSON.parse(localStorage.getItem('productData')));
    } else {
      localStorage.setItem('productData', JSON.stringify(this.productModel.productModel));
      console.log('productModel= ', this.productModel.productModel);
    }
    this.productList = JSON.parse(localStorage.getItem('productData'));
  }

  navigate = (navPage) => {
    const url = '/' + navPage;
    this.navCtrl.navigateForward([url]);
  }



}
