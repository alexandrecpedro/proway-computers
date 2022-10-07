import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  /** ATTRIBUTE **/
  contactForm = this._fb.group({
    name: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    subject: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telephone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    message: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  });

  /** CONSTRUCTOR **/
  constructor(
    private _fb: FormBuilder
  ) { }

  /** METHODS **/
  ngOnInit(): void {
  }

  sendForm() {
    alert("The message was sent!");
    this.contactForm.reset();
  }
}