import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  imageResponse: any = [];
  options: any;

  private product = {
    productName: '',
    productCategory: 'Electronics',
    productPrice: 0,
    productQuantity: 0,
    description: '',
    id: 0,
    images: []
  };

  private productErrMsg = {
    productName: '',
    productPrice: '',
    productQuantity: '',
    productDescription: '',
    imageResponse: ''
  };

  constructor(private navCtrl: NavController, private imagePicker: ImagePicker) { }

  ngOnInit() {
  }

  ionViewWillEnter = () => {
    this.imageResponse = [];
  }

  addProduct = () => {
    console.log('this.product= ', this.product);
    if (!this.product.productName) {
      this.productErrMsg.productName = 'Please enter product name';
    }
    if (!this.product.productPrice) {
      this.productErrMsg.productPrice = 'Please enter product price';
    }
    if (!this.product.productQuantity) {
      this.productErrMsg.productQuantity = 'Please enter product quantity';
    }
    if (!this.product.productQuantity) {
      this.productErrMsg.productDescription = 'Please enter product description';
    }
    if (this.imageResponse.length === 0) {
      this.productErrMsg.imageResponse = 'Please enter product images';
    }
    if (!this.product.productName || !this.product.productPrice || !this.product.productQuantity
      || !this.product.productQuantity || this.imageResponse.length === 0) {
      return;
    } else {
      this.product.images = this.imageResponse;
      const productList = JSON.parse(localStorage.getItem('productData'));
      this.product.id = productList.length + 1;
      productList.push(this.product);
      localStorage.setItem('productData', JSON.stringify(productList));
      this.goBack();
    }
  }

  getImages() {
    this.options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      // maximumImagesCount: 3,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 500,
      // height: 200,

      // quality of resized image, defaults to 100
      quality: 100,

      // output type, defaults to FILE_URIs.
      // available options are
      // window.imagePicker.OutputType.FILE_URI (0) or
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    this.imagePicker.getPictures(this.options).then((results) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < results.length; i++) {
        this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (err) => {
      alert(err);
    });
  }

  goBack = () => {
    this.navCtrl.navigateForward(['/home']);
  }

}
