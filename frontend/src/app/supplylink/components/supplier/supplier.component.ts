import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../types/Supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
})
export class SupplierComponent implements OnInit {
  successMessage: string | null = null;
  errorMessage: string | null = null;
  supplierForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.supplierForm = this.formBuilder.group({
      supplierName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      address: [""],
      username: ["", [Validators.required, this.noSpecialCharacters]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      role: ["", [Validators.required]]
    });
  }

  private noSpecialCharacters(control: any): { [key: string]: boolean } | null {
    const SPECIAL_CHARACTERS_REGEX = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    if (SPECIAL_CHARACTERS_REGEX.test(control.value)) {
      return { specialCharacters: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.supplierForm.valid) {
      // Simulate backend call and handle error messages
      const backendError = this.simulateBackendError();
      if (backendError) {
        this.errorMessage = backendError;
        this.successMessage = null;
      } else {
        this.successMessage = 'Supplier has been successfully created!';
        this.errorMessage = null;
        console.log('Supplier Created: ', this.supplierForm.value);
        this.supplierForm.reset();
      }
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
      this.successMessage = null;
    }
  }

  simulateBackendError(): string | null {
    // Simulate a backend error based on some condition
    const teamName = this.supplierForm.get('supplierName')?.value;
    if (teamName === 'supplierName') {
      return 'Supplier name already exists.';
    }
    return null;
  }

}
