import {ProductLang} from '../clases/product-lang';
import {Image} from '../clases/image';
import { CustomerProduct } from './customer-product';
import { OrderGarage } from './order-garage';

export class AddProduct {
    public id_product: number;
    public id_category_default: number;
    public price: number;
    public condition: string;
    public date_add: Date;
    public date_upd: Date;
    public productLang: ProductLang;
    public image: Image;
    public imgData: string[];
    public customerProduct: CustomerProduct;
    public orderGarage: OrderGarage;
    constructor() {
        this.productLang = new ProductLang();
        this.image = new Image();
        this.orderGarage = new OrderGarage();
        this.imgData = [];
        this.customerProduct = new CustomerProduct();
        this.price = 0;
        this.id_product = 0;
    }
}
