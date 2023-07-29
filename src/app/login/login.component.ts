import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { googleClientId, allowedGmailDomain } from '../_config/app.config';
import jwt_decode from "jwt-decode";
import * as $ from "jquery";
declare let google: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  constructor(private router: Router) { }

  ngAfterViewInit(): void {

    setTimeout(() => {
      // console.log(google)
      google.accounts.id.initialize({
        client_id: googleClientId,
        callback: this.handleCredentialResponse.bind(this),
      });
      google.accounts.id.renderButton(
        document.getElementById('google-btn'),
        { theme: 'outline', size: 'large' } // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }, 1000)

  }

  handleCredentialResponse(res: any) {
    const loginDetails: any = jwt_decode(res.credential);
    const selectedCredentials: any = {
      email: loginDetails.email,
      email_verified: loginDetails.email_verified,
      picture: loginDetails.picture,
      last_name: loginDetails.family_name,
      googleid: loginDetails.jti,
      first_name: loginDetails.given_name
    }
    if (loginDetails.hd && allowedGmailDomain.indexOf(loginDetails.hd) > -1) {
      this.router.navigateByUrl('/template');
      localStorage.setItem('template', JSON.stringify(selectedCredentials))
      $('#hidden-btn').click();
    }
    else {
      $('.text-danger').css('display', 'block');
      setTimeout(() => {
        $('.text-danger').css('display', 'none');
      }, 3000);
    }
  }
}
