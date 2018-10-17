import { Component, OnInit, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';
import { ArchiveImagesComponent } from '../archive-images/archive-images.component';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  @ViewChild(ArchiveImagesComponent)
  private imagesComponent: ArchiveImagesComponent;

  constructor(private router: Router, private authService: AuthService, private uploadService: UploadService, private ref: ChangeDetectorRef) { 
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe(result => {
      console.log("In subscribe");
      var data = (<any>result);

      console.log("Status is " + data.status);

      if(data.status != 200){
        this.router.navigateByUrl('/auth');
      }

    });
  }

  imageUpdate(){
    console.log("In image update");
    this.imagesComponent.getDishes();
  }

  /**
   * route to dashboard component
   */
  goToDash(){
    this.router.navigateByUrl('/dashboard');
  }
  /**
   * route to friends component
   */
  goToFriends(){
    this.router.navigateByUrl('/friends');
  }

  /**
   * route to menu component
   */
  goToMenu(){
    this.router.navigateByUrl('/menu');
  }

    /**
   * route to settings component
   */
  goToSettings(){
    this.router.navigateByUrl('/settings');
  }

  /**
   * logout user, and route to auth component
   */
  logout(){
    this.authService.logout().subscribe(res => {
      this.router.navigateByUrl('/auth');
    });
  }

}
