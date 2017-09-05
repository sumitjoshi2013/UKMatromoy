import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { dataService } from './services/data.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { RegisterprofileComponent } from './registerprofile/registerprofile.component';
import { HeaderMenuComponent } from './header/header.component';
import { MultiauthenticationComponent } from './multiauthentication/multiauthentication.component';
import { ForgetprofileComponent } from './forgetprofile/forgetprofile.component';
import { BasicinformationComponent } from './basicinformation/basicinformation.component';
import { OtherinformationsComponent } from './otherinformations/otherinformations.component';
import { ResidentialinformationComponent } from './residentialinformation/residentialinformation.component';
import { AccountinformationComponent } from './accountinformation/accountinformation.component';
import { RegistrationThanksComponent } from './registration-thanks/registration-thanks.component';
import { ImagegalleryComponent } from './imagegallery/imagegallery.component';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { GalleryModule, GalleryService} from 'ng-gallery';
import { FileuploadComponent } from './fileupload/fileupload.component'
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
//import {UPLOAD_DIRECTIVES} from 'ng2-file-uploader/ng2-file-uploader';
import { GooglerecaptchaComponent } from './googlerecaptcha/googlerecaptcha.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import {DpDatePickerModule} from 'ng2-date-picker';
import {MyDatePickerModule } from 'mydatepicker/src/my-date-picker';
import { EqualValidator } from './common/password.match.directive';
import { DropdownRequired } from './common/dropdown.required.directive';
import { ProfilelistComponent } from './profilelist/profilelist.component';
import {MdGridListModule} from '@angular/material';
import { MaterialModule } from '@angular/material';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';
import { DeletepicComponent } from './deletepic/deletepic.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OurvisionComponent } from './ourvision/ourvision.component';
import 'hammerjs';
import { UsermessagehistoryComponent } from './usermessagehistory/usermessagehistory.component';
import { UsermessagesComponent } from './usermessages/usermessages.component';
import { SearchprofilesComponent } from './searchprofiles/searchprofiles.component';
import { ShowInterestComponent } from './show-interest/show-interest.component';
import {MdAutocompleteModule} from '@angular/material';
import { TestComponent } from './test/test.component';
import { TestService } from './test/test.service'

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token'
  }), http);
}

 export const galleryConfig  = {
     "style": {
    "background": "#121519",
    "width": "900px",
    "height": "600px"
  },
  "animation": "none",
  "loader": {
    "width": "50px",
    "height": "50px",
    "position": "center",
    "icon": "oval"
  },
  "description": {
    "position": "bottom",
    "overlay": true,
    "text": true,
    "counter": true,
    "style": {
      "background": "rgba(0,0,0, 0.5)"
    }
  },
  "navigation": true,
  "bullets": {
    "position": "top"
  },
  "player": {
    "autoplay": true,
    "speed": 3000
  },
  "thumbnails": {
    "width": 10,
    "height": 10,
    "position": "bottom",
    "space": 10
  },
  "gestures": true
  }
  




  @NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    RegisterprofileComponent,
    HeaderMenuComponent,
    MultiauthenticationComponent,
    ForgetprofileComponent,
    BasicinformationComponent,
    OtherinformationsComponent,
    ResidentialinformationComponent,
    AccountinformationComponent,
    RegistrationThanksComponent,
    ImagegalleryComponent,
    FileuploadComponent,
    FileSelectDirective,
    GooglerecaptchaComponent,
    EqualValidator,
    DropdownRequired,
    ProfilelistComponent,
    ProfiledetailComponent,
    DeletepicComponent,
    EditprofileComponent,
    ContactusComponent,
    OurvisionComponent,
    UsermessagehistoryComponent,
    UsermessagesComponent,
    SearchprofilesComponent,
    ShowInterestComponent,
    TestComponent
    
  ],
  imports: [
    MaterialModule,
    MdGridListModule,
    MdAutocompleteModule,
    MyDatePickerModule ,
  //AlertModule.forRoot(),
    BrowserModule,
    JsonpModule,
    DpDatePickerModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    FormsModule,ReactiveFormsModule,
    HttpModule, BrowserAnimationsModule,
     GalleryModule.forRoot(galleryConfig),
    RouterModule.forRoot([
      { path: '', component: HomeComponent , canActivate: [AdminAuthGuard]},
      { path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: '#/login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent },
      { path: 'registerprofile', component: RegisterprofileComponent },
      { path: 'multiauth', component: MultiauthenticationComponent,  },
//{ path: 'multiauth', component: MultiauthenticationComponent, canActivate: [AdminAuthGuard] },
      { path: 'forgetpassword', component: ForgetprofileComponent },
      { path: 'RegistrationOTP', component: RegistrationThanksComponent },
      { path: 'Imagegallery', component: ImagegalleryComponent , canActivate: [AdminAuthGuard]},
      { path: 'Fileupload', component: FileuploadComponent , canActivate: [AdminAuthGuard]},
      { path: 'profilelist', component: ProfilelistComponent},
      { path: 'profiledetail', component: ProfiledetailComponent , canActivate: [AdminAuthGuard]},
      { path: '#/profiledetail', component: ProfiledetailComponent},
      { path: 'contactus', component: ContactusComponent },
      { path: 'vision', component: OurvisionComponent },
      { path: 'deletepic', component: DeletepicComponent , canActivate: [AdminAuthGuard]},
      { path: 'editprofile', component: EditprofileComponent , canActivate: [AdminAuthGuard]},
      { path: 'messagehistory', component: UsermessagehistoryComponent , canActivate: [AdminAuthGuard]},
      { path: 'usermessage', component: UsermessagesComponent , canActivate: [AdminAuthGuard]},
      { path: 'searchprofile', component: SearchprofilesComponent , canActivate: [AdminAuthGuard]},
      { path: 'showInterest', component: ShowInterestComponent},
      { path: 'test', component: TestComponent},
    ],{ useHash: true })
  ],
  providers: [
    dataService,
    TestService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    AuthHttp,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },

    // For creating a mock back-end. You don't need these in a real app. 
    //fakeBackendProvider,
   // MockBackend,
    BaseRequestOptions
  ],
  
  bootstrap: [AppComponent]
  
})
export class AppModule { }
