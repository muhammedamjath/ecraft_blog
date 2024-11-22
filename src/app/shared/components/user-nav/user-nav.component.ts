import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Authservice } from '../../../core/auth/authService.service';
import { UserService } from '../../../features/user/userService.service';

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
export class UserNavComponent implements OnInit {
  constructor(private router:Router ,private authService:Authservice , private userService:UserService ){}
  name:any ='Amjath'
  email:any ='muhammedamjath0@gmail.com'
  openSideBar:boolean = false
  openMenubar:boolean=false


  ngOnInit(): void {
    this.userService.getUserData().subscribe((res)=>{
      this.name = res.name
      this.email = res.email
      
    })
    this.checkScreenSize()
  }


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

  logout(){
    this.authService.logOut()
  }
}
