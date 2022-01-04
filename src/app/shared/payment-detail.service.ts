import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  //readonly baseURL = 'http://localhost:43407/api/PaymentDetails'
  public static uri: string = "/api"
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  postPaymentDetail() {
    return this.http.post(PaymentDetailService.uri, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${PaymentDetailService.uri}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${PaymentDetailService.uri}/${id}`);
  }

  refreshList() {
    this.http.get(PaymentDetailService.uri)
      .toPromise()
      .then(res =>this.list = res as PaymentDetail[]);
  }


}
