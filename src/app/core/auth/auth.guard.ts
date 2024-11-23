import { Location } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const location = inject(Location)
  let token ;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token'); 
  }
  if(!token){
    return true
  }else{
    if(typeof window !== 'undefined'){
        location.back()
    }    return false;
  }
};
 