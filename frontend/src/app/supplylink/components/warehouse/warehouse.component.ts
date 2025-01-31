import { Component, OnInit } from "@angular/core";
import { Warehouse } from '../../types/Warehouse';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Supplier } from "../../types/Supplier";


@Component({
    selector: 'app-warehouse',
    templateUrl: './warehouse.component.html',
    styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
    warehouseForm!: FormGroup;
    successMessage: string | null = null;
    errorMessage: string | null = null;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.warehouseForm = this.fb.group({
            supplierId: ["", [Validators.required]],
            warehouseName: ["", [Validators.required]],
            location: [""],
            capacity: ["", [Validators.required, Validators.min(0)]],
        });
    }


    onSubmit(): void {
        if (this.warehouseForm.valid) {
          // Simulate backend call and handle error messages
          const backendError = this.simulateBackendError();
          if (backendError) {
            this.errorMessage = backendError;
            this.successMessage = null;
          } else {
            this.successMessage = 'Warehouse has been successfully created!';
            this.errorMessage = null;
            console.log('Warehouse Created: ', this.warehouseForm.value);
            this.warehouseForm.reset();
          }
        } else {
          this.errorMessage = 'Please fill out all required fields correctly.';
          this.successMessage = null;
        }
      }
    
      simulateBackendError(): string | null {
        // Simulate a backend error based on some condition
        const teamName = this.warehouseForm.get('warehouseName')?.value;
        if (teamName === 'warehouseName') {
          return 'Warehouse name already exists.';
        }
        return null;
      }
}