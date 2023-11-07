import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sinrecetapi',
  templateUrl: './sinrecetapi.page.html',
  styleUrls: ['./sinrecetapi.page.scss'],
})
export class SinrecetapiPage implements OnInit {

  characters: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://206.189.200.204:8080/api/v1/medicine')
    .subscribe(data =>{
    console.log(data);
    this.characters = data;
  });
  }

}
