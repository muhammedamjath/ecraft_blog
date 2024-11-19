import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css'
})
export class UserNavComponent {
  constructor(private router:Router , ){}
  name:any ='Amjath'
  email:any ='muhammedamjath0@gmail.com'
  isSuperAdmin:any = false
  openSideBar:boolean = false
  openMenubar:boolean=false


  ngOnInit(): void {
    // if(typeof window !== 'undefined'){
    //   this.name =localStorage.getItem('adminName')
    //   this.email = localStorage.getItem('adminEmail')
    //   this.isSuperAdmin = localStorage.getItem('isSuperAdmin')
    // }
    this.checkScreenSize()
  }
  
  // logout(){
  //   this.featureService.logOut()
  // }

  screenSize: string = '';
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
    if (width < 576){
      this.checkScreenSize();
      this.screenSize = 'xs';
    }
    else if (width < 768){
      this.checkScreenSize();
      this.screenSize = 'sm';
    } 
    else if (width < 992){
      this.checkScreenSize();
      this.screenSize = 'md';
    }
    else{
      this.checkScreenSize();
      this.screenSize = 'lg';
    } 
    }
  }

  checkScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      this.onScreenSizeLessThanLg();
    } else if (screenWidth >= 992) {
      this.onScreenSizeLargerThanLg();
    }
  }

  onScreenSizeLessThanLg() {
    this.screenSize = 'sm';
    this.openSideBar = false;
    this.openMenubar = true 
  }

  onScreenSizeLargerThanLg() {
    this.screenSize = 'lg';
    this.openSideBar = true;
    this.openMenubar = false
  }
  open(){
    this.openSideBar = !this.openSideBar
    this.openMenubar = this.openMenubar 
    console.log('Sidebar:', this.openSideBar, 'Menu Icon:', this.openMenubar);   
  }
}
