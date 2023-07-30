import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent {
  orderDetails: any = {};
  orderForm: any;
  ngOnInit(): void {
    this.orderDetails = JSON.parse(localStorage.getItem('package')! || '{}');
  }

  constructor(private fb: FormBuilder){
    this.createOrderForm();
    console.log(this.orderForm.value);
  }

  createOrderForm(): void{
    this.orderForm = this.fb.group({
      name: new UntypedFormControl(null, Validators.required),
      orderNumber: new UntypedFormControl(null, Validators.required),
      packageName: new UntypedFormControl(null, Validators.required),
      amount: new UntypedFormControl(null, Validators.required),
      status: new UntypedFormControl(null, Validators.required),
      owner: new UntypedFormControl(null, Validators.required),
      dateOrdered: new UntypedFormControl(null, Validators.required),
      dateDelivered: new UntypedFormControl(null, Validators.required),
      address: this.fb.group({
        shipping: this.createAddressGroup(),
        billing: this.createAddressGroup()
      })
    })
  }

  createAddressGroup(): FormGroup {
    return this.fb.group({
      street: new UntypedFormControl(null, Validators.required),
      city: new UntypedFormControl(null, Validators.required),
      province: new UntypedFormControl(null, Validators.required),
      code: new UntypedFormControl(null, Validators.required)
    })
  }

  updateForm(form: FormGroup): void{
    console.log(form.value);
    
  }
}
