//https://github.com/kekeh/mydatepicker
import { Component, OnInit,ViewChild ,Directive,forwardRef, Attribute,OnChanges, SimpleChanges,Input} from '@angular/core';
import { Router } from "@angular/router";
import { NgSemanticModule } from "ng-semantic";
import {DatePickerComponent, IDatePickerConfig } from 'ng2-date-picker';
import {IMyDpOptions  } from 'mydatepicker/src/my-date-picker';
import { EqualValidator } from './password.match.directive';
import { DropdownRequired } from './../common/dropdown.required.directive';
import { Http, Response, Request, RequestMethod, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder, NG_VALIDATORS} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { NotFoundError } from './../common/not-found-error';
import { dataService } from "app/services/data.service";
import {MdAutocompleteModule} from '@angular/material';
import { AuthService } from "app/services/auth.service";

class arrayData {
  constructor(public id: number, public name: string){}
}

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-registerprofile',
  templateUrl: './registerprofile.component.html',
  styles: [`
      .error { color: crimson; }
      .success { color: green; }
  ` ]
})
export class RegisterprofileComponent implements OnInit {
  religionStatusList: arrayData[];
  motherToungeList : arrayData[]; 
  rashiStatusList : arrayData[]; 
  cityStatusList : arrayData[]; 

  ngOnInit() {
    let Url = "http://localhost:8910/api/api/MasterData/"; 
    this.dataservice.getData(Url + "ReligionMaster?userid="+this.authService.currentUser.name).subscribe((res: any) => { this.religionStatusList = res });
    this.dataservice.getData(Url + "MotherToungeMaster?userid="+this.authService.currentUser.name).subscribe((res: any) => { this.motherToungeList = res });
    this.dataservice.getData(Url + "RashiMaster?userid="+this.authService.currentUser.name).subscribe((res: any) => { this.rashiStatusList = res });
    this.dataservice.getData(Url + "CityMaster?userid="+this.authService.currentUser.name).subscribe((res: any) => { this.cityStatusList = res });
  }
 
    timeobj = new Array(24);
    minobj = new Array(60);

    createRange(number){
    var  items = [];
      for(var i = 0; i <= number; i++){
         items.push(i);
      }
      return items;
    }

    @ViewChild('dayPicker') datePicker: DatePickerComponent;
    @ViewChild('f') form: any;
    pattern="/^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/";

  myform = new FormGroup({
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  landline:  new FormControl('', [Validators.minLength(10), Validators.maxLength(11)]),
  mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  gender: new FormControl('', Validators.required),
  maritalstatus : new FormControl('', Validators.required),
  gotra : new FormControl('', Validators.required),
  dob : new FormControl('', Validators.required),
  time: new FormGroup({
  hh : new FormControl('', Validators.required),
  min : new FormControl('', Validators.required),
  sec : new FormControl('', Validators.required)
  }),
  birthplace : new FormControl('', Validators.required),
  //timeofbirth : new FormControl('', Validators.required),
  email : new FormControl('', Validators.required),
  password : new FormControl('', Validators.required),
  confirmPassword : new FormControl('', Validators.required),
  height: new FormControl('', Validators.required),
  weight: new FormControl('', Validators.required),
  incomerange: new FormControl('', Validators.required),
  smokestatus: new FormControl('', Validators.required),
  dietstatus: new FormControl('', Validators.required),
  workstatus: new FormControl('', Validators.required),
  drinkstatus: new FormControl('', Validators.required),
  religion: new FormControl('', Validators.required),
  mothertounge: new FormControl('', Validators.required),
  rashi: new FormControl('', Validators.required),
  education: new FormControl('', Validators.required),
  profession: new FormControl('', Validators.required),
  address: new FormControl('', Validators.required),
  country: new FormControl('', Validators.required),
  city: new FormControl('', Validators.required),
  place: new FormControl('', Validators.required),
  zip: new FormControl('', Validators.required),
  about: new FormControl('', Validators.required),
  mySubCaste: new FormControl('', Validators.required),
  recaptcha:  new FormControl('', Validators.required),

  nativePlace: new FormControl('', Validators.required),
  mySocialProfile: new FormControl('')
});
   open() {
        this.datePicker.api.open();
    }
    close() {
         this.datePicker.api.close();
    }
 
    date = new Date();
    year =  (this.date.getFullYear() - 18);
    month =  (this.date.getMonth() + 1);
    day =  (this.date.getDate());
    maxBirthDate = "Your birth date should be greater then: " +  (this.day+"-"+this.month+"-"+this.year);
    private maxdate: Object = { date: { year: this.year, month: this.month, day: this.day } };

    myDatePickerOptions: IMyDpOptions = {
      todayBtnTxt: 'Today',
      dateFormat: 'dd-mm-yyyy',
      inline: false, showClearDateBtn: true, 
      disableSince: {year: this.year, month: this.month, day: this.day}
  };
    
    public alerts: any = [];
    error = "error";
    maxDate = new Date(2000, 0, 1);
    
    genderList = [
        {id:1, name:'Male'},
        {id:2, name:'Female'}
    ];

    maritalStatusList = [
        {id:1, name:'Single'},
        {id:2, name:'Divorced'},
        {id:3, name:'Other'}
   ];

   
   countryStatusList = [
        {id:1, name:'India'}
      ];


    drinkStatusList = [
        {id:1, name:'Daily'},
        {id:2, name:'Occational'},
        {id:3, name:'Never'}
    ];

    
    smokeStatusList = [
      {id:1, name:'Smoking'},
      {id:2, name:'Non-Smoking'}
 ];

  dietStatusList = [
      {id:1, name:'Veg'},
      {id:2, name:'Non-Veg'},
      {id:3, name:'Eggetarian'},
      {id:4, name:'Other'}
 ];

    CTCIncomeList = [
        {id:1, name:'No Value'},
        {id:2, name:'0 - 1,00,000'},
        {id:3, name:'1,00,000 - 3,00,000'},
        {id:4, name:'3,00,000 - 5,00,000'},
        {id:5, name:'5,00,000 - 8,00,000'},
        {id:6, name:'8,00,000 - 10,00,000'},
        {id:7, name:'10,00,000 - 13,00,000'},
        {id:8, name:'13,00,000 - 15,00,000'},
        {id:9, name:'15,00,000 - 18,00,000'},
        {id:10, name:'18,00,000 - above 18,00,000'}
   ];

    workStatusList = [
        {id:1, name:'Working in Govt Organisation'},
        {id:2, name:'Working in Semi-Govt Organisation'},
        {id:3, name:'Working in Pvt Organisation'},
        {id:4, name:'Non-Working'},
        {id:5, name:'Own Business'},
        {id:6, name:'Other'},
   ];

   subCasteStatusList = [
        {id:900, name:'Joshi'},
        {id:901, name:'Pant'},
        {id:902, name:'Pandey'}
   ];

  constructor(private router: Router, private formBuilder: FormBuilder, private http: Http, 
    private dataservice: dataService,  private authService: AuthService
  ) {  }
  
  get nativePlace()
  {
    return this.myform.get("nativePlace");
  }

  get hh()
  {
    return this.myform.get("hh");
  }
  
  get min()
  {
    return this.myform.get("min");
  }

  get sec()
  {
    return this.myform.get("sec");
  }
  
  get mobile()
  {
    return this.myform.get("mobile");
  }

  get dob()
  {
    return this.myform.get("dob");
  }
  get timeofbirth()
  {
    return this.myform.get("timeofbirth");
  }
  get firstName()
  {
    return this.myform.get("firstName");
  }
  get lastName()
  {
    return this.myform.get("lastName");
  }
  get landline()
  {
    return this.myform.get("landline");
  }
  get phone()
  {
    return this.myform.get("phone");
  }

  get gender()
  {
    return this.myform.get("gender");
  }

  get maritalstatus()
  {
    return this.myform.get("maritalstatus");
  }
  get gotra()
  {
    return this.myform.get("gotra");
  }
  get birthplace()
  {
    return this.myform.get("birthplace");
  }
  get password()
  {
    return this.myform.get("password");
  }
  get incomerange()
  {
    return this.myform.get("incomerange");
  }
  get smokestatus()
  {
    return this.myform.get("smokestatus");
  }
  get dietstatus()
  {
    return this.myform.get("dietstatus");
  }
  get workstatus()
  {
    return this.myform.get("workstatus");
  }
  get confirmPassword()
  {
    return this.myform.get("confirmPassword");
  }
  get height()
  {
    return this.myform.get("height");
  }
  get weight()
  {
    return this.myform.get("weight");
  }
  get email()
  {
    return this.myform.get("email");
  }
  get drinkstatus()
  {
    return this.myform.get("drinkstatus");
  }
  get rashi()
  {
    return this.myform.get("rashi");
  }
  get mothertounge()
  {
    return this.myform.get("mothertounge");
  }
  get religion()
  {
    return this.myform.get("religion");
  }
 
  get education()
  {
    return this.myform.get("education");
  }
  get profession()
  {
    return this.myform.get("profession");
  }
  get address()
  {
    return this.myform.get("address");
  }

  get country()
  {
    return this.myform.get("country");
  }
  get city()
  {
    return this.myform.get("city");
  }
  get place()
  {
    return this.myform.get("place");
  }
  get zip()
  {
    return this.myform.get("zip");
  }
  get about()
  {
    return this.myform.get("about");
  }
  get mySubCaste()
  {
    return this.myform.get("mySubCaste");
  }
 get recaptcha()
 {
  return this.myform.get("recaptcha");
 }
get mySocialProfile()
 {
  return this.myform.get("mySocialProfile");
 }

   onSubmit(data: any) {
   
      let url1 = "http://localhost:8910/Api/api/Registration";
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Access-Control-Allow-Origin','*');
      headers.append('Access-Control-Allow-Credentials', 'true');
      let options = new RequestOptions({ headers: headers });
      console.log("POST");
      let url = `${url1}/`;
      let f= this.http.post(url, JSON.stringify(data),options ).subscribe(res => console.log(res.json()));
      console.log(f);
      return f;
   // if (this.myform.valid) {
    //  console.log("Form Submitted!" + this.myform);
    //  this.router.navigate(['/RegistrationOTP']);
   //   this.myform.reset();
   // }
  }
  private handleError(error: Response) {
    if (error.status === 400)
      {
          console.log(error.json());
      }
     // return Observable.throw(new BadInput(error.json()));
  
    if (error.status === 404)
      {
        console.log(error.json());
      }
      return Observable.throw(new NotFoundError());
     // return Observable.throw(new NotFoundError());
    
    //return Observable.throw(new AppError(error));
  }
gotoLogin()
    {
      this.router.navigate(['/login']);
    }
}