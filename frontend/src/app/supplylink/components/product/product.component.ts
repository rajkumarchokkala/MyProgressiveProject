
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../types/Product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    productForm!: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.productForm = this.fb.group({
            productId: [null],
            warehouseId: [null, [Validators.required, Validators.min(1)]],
            productName: [null, Validators.required],
            productDescription: [null],
            quantity: [null, [Validators.required, Validators.min(0)]],
            price: [null, [Validators.required, Validators.min(1)]],
        });
    }

    onSubmit() {
        if (this.productForm.valid) {
            const formData = this.productForm.value;
            const product = new Product(1, "12", "table", "table desc", 100, 1500.0);
            // Further logic for handling the transaction
        }
    }
}
