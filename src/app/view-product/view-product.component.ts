import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  private slides: any = [];
  private productInfo: any = {};
  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('productData')) !== null && JSON.parse(localStorage.getItem('productData')) !== undefined) {
      const productId = this.activatedRoute.snapshot.paramMap.get('id');
      const productData = JSON.parse(localStorage.getItem('productData'));
      this.productInfo = productData.filter(data => Number(data.id) === Number(productId));
      this.slides = this.productInfo[0].images;
    }
  }

  goBack = () => {
    this.navCtrl.navigateForward(['/home']);
  }

  editProductPage = () => {
    this.navCtrl.navigateForward(['/editProduct/' + this.activatedRoute.snapshot.paramMap.get('id')]);
  }

}
