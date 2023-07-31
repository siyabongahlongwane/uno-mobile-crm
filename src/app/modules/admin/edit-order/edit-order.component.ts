import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent {
  orderForm: any;
  statuses: string[] = ['New', 'In Progress', 'Pending Verification', 'Awaiting Documents', 'Delivered'];
  packages: any = ["Hola Nkalakatha", "The Hola 20 Steena", "The Hola 30 X nice", "The Hola 4 X 4 Masihlalisane", "The Hola Wonke Bonke", "The Hola Ngamla"];

  ngOnInit(): void {}

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public orderDetails: any, private dialogRef: MatDialogRef<EditOrderComponent>){
    this.createOrderForm();
    this.orderForm.patchValue(this.orderDetails);
  }

  createOrderForm(): void{
    this.orderForm = this.fb.group({
      name: new UntypedFormControl(null, Validators.required),
      orderNumber: new UntypedFormControl(null, Validators.required),
      package: new UntypedFormControl(null, Validators.required),
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
    this.dialogRef.close(form.value);
  }
}
