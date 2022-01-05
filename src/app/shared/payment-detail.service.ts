import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  //readonly baseURL = 'http://localhost:43407/api/PaymentDetails'
  //public static uri: string = "/api"
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  postPaymentDetail() {
    return this.http.post(this.baseUri, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseUri}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseUri}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseUri)
      .toPromise()
      .then(res =>this.list = res as PaymentDetail[]);
  }

  get baseUri() {
    return `${Config.api}`;
}


}
