import { Component, HostListener } from '@angular/core';
import { UserService } from '../../../features/user/userService.service';
import { Authservice } from '../../../core/auth/authService.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css'
})
export class AdminNavComponent {
  name: any = '';
  email: any = '';
  imageUrl:string = ''
  openSideBar: boolean = false;
  openMenubar: boolean = false;
  screenSize: string = '';

  isProfileModalOpen: boolean = false;
  submitted: boolean = false;
  selectedFile: File | null = null;

  constructor(
    private authService: Authservice,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.userService.getUserData().subscribe((res) => {      
      this.name = res.name;
      this.email = res.email;
      this.imageUrl = res.image
    });
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 576) {
        this.checkScreenSize();
        this.screenSize = 'xs';
      } else if (width < 768) {
        this.checkScreenSize();
        this.screenSize = 'sm';
      } else if (width < 992) {
        this.checkScreenSize();
        this.screenSize = 'md';
      } else {
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
    this.openMenubar = true;
  }

  onScreenSizeLargerThanLg() {
    this.screenSize = 'lg';
    this.openSideBar = true;
    this.openMenubar = false;
  }

  open() {
    this.openSideBar = !this.openSideBar;
    this.openMenubar = this.openMenubar;
    console.log('Sidebar:', this.openSideBar, 'Menu Icon:', this.openMenubar);
  }

  logout() {
    this.authService.logOut();
  }


}
