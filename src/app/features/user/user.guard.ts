import { Location } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const UserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const location = inject(Location)
  let token , roll ;

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
    roll = localStorage.getItem('roll')
  }
  if(token && roll == 'user'){
    return true
  }else{
    if(typeof window !== 'undefined'){
        location.back()
    }
    return false;
  }
};
 