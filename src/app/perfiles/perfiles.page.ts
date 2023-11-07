import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.page.html',
  styleUrls: ['./perfiles.page.scss'],
})
export class PerfilesPage implements OnInit {
  profileId: string;
  profileData: any;

 
  constructor( 
    private activatedRoute: ActivatedRoute, 
    private http: HttpClient) { this.profileId = ''; this.profileData = '';}

    ngOnInit() {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.profileId = id;
        this.http.get('http://206.189.200.204:8080/api/v1/medicine/' + this.profileId)
        .subscribe((res: any) => {
          this.profileData = res; 
          console.log(res);
          });
      }
    }
    }