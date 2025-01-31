import { Component, OnInit } from "@angular/core";
import { Warehouse } from '../../types/Warehouse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-warehouse',
    templateUrl: './warehouse.component.html',
    styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
    warehouseForm!: FormGroup;
    warehouse: Warehouse | undefined;
    formBuilder!: FormBuilder;
    validateWarehouseId: any;
    validateNonNegativeCapacity: any;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        // No need to fetch data from a service since we are using hardcoded data
        this.warehouseForm = this.fb.group({
            warehouseId: [null],
            supplierId: [null, [Validators.required, Validators.min(1)]],
            warehouseName: ["", [Validators.required]],
            location: [""],
            capacity: ["", [Validators.required, Validators.min(0)]],
        });
        this.warehouse = new Warehouse(1, "12", "Flamingo", "Nevada", 1000);

    }

    onSubmit() {
        throw new Error('Method not implemented.');
    }
}