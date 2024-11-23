import { Location } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const location = inject(Location)
  let token , roll ;

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
    roll = localStorage.getItem('roll')
  }
  if(token && roll == 'admin'){
    return true
  }else{
    if(typeof window !== 'undefined'){
        location.back()
    }

    return false;
  }
};
