//https://dethariel.github.io/ng-recaptcha/forms
import { Component, OnInit } from '@angular/core';

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'google-recaptcha',
  styles: [`
      .error { color: crimson; }
      .success { color: green; }
  ` ],
  templateUrl: './googlerecaptcha.component.html',
})

export class GooglerecaptchaComponent  {
public formModel: FormModel = {};
}
