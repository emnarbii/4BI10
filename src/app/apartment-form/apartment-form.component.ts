import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartment-form',
  templateUrl: './apartment-form.component.html',
  styleUrls: ['./apartment-form.component.css'],
})
export class ApartmentFormComponent {
  restForm!: FormGroup;
  constructor(private fb: FormBuilder, private act: ActivatedRoute) {
    this.restForm = this.fb.group({
      apartNum: [
        '',
        [Validators.required, Validators.pattern('^[1-9][0-9]+$')],
      ],
      floorNum: [
        '',
        [Validators.required, Validators.pattern('^[1-9][0-9]+$')],
      ],
      terrace: ['', Validators.required],
      surfaceterrace: ['', Validators.required],
      category: ['', Validators.required],
      ResidenceId: ['', Validators.required],
    });
  }
}
