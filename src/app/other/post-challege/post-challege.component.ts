import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as otp from 'otplib/';
@Component({
  selector: 'app-post-challege',
  templateUrl: './post-challege.component.html',
  styleUrls: ['./post-challege.component.css'],
})
export class PostChallegeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  output: string;
  ngOnInit(): void {
    this.main();
  }

  post(): void {
    const postData = {
      github_url: 'https://github.com/holykiller/HenngeChallenge',
      contact_email: 'abraham_gto@hotmail.com',
    };
    const ip = 'https://api.challenge.hennge.com/challenges/003';
    const sharedsecret = 'abraham_gto@hotmail.comHENNGECHALLENGE003';

    const httpOptions: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    });

    this.http
      .post(ip, postData, { headers: httpOptions })
      .toPromise()
      .then((data: any) => {
        console.log(data);
        this.output = JSON.stringify(data);
      });
  }
  userid = 'abraham_gto@hotmail.com';
  secret_suffix = 'HENNGECHALLENGE003';
  shared_secret = this.userid + this.secret_suffix;
  timestep = 30;
  T0 = 0;

  main() {
    // const axios = require('axios');
    // const base64 = require('base-64');
    // const utf8 = require('utf8');
    // const { totp } = require('otplib');

    const reqJSON = {
      github_url: 'https://github.com/holykiller/HenngeChallenge',
      contact_email: 'abraham_gto@hotmail.com',
    };
    const stringData = JSON.stringify(reqJSON);

    const URL = 'https://api.challenge.hennge.com/challenges/003';
    const sharedSecret = reqJSON.contact_email + 'HENNGECHALLENGE003';

    let optionsObj = { digits: 10, algorithm: 'sha512', step: 0 };
    // authenticator.options = { digits: 10, algorithm: 'sha512', step: 0 };

    // console.log(otp.totp.allOptions());

    // const myTotp = totp.generate(sharedSecret);
    // const isValid = totp.check(myTotp, sharedSecret);

    // console.log('Token Info:', { myTotp, isValid });

    // const authStringUTF = reqJSON.contact_email + ':' + myTotp;
    // const bytes = utf8.encode(authStringUTF);
    // const encoded = base64.encode(bytes);

    // const createReq = async () => {
    //   try {
    //     // set the headers
    //     const config = {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: 'Basic ' + encoded,
    //       },
    //     };

    //     console.log('Making req', { URL, reqJSON, config });

    //     const res = await axios.post(URL, stringData, config);
    //     console.log(res.data);
    //   } catch (err) {
    //     console.error(err.response.data);
    //   }
    // };

    // createReq();
  }
}
