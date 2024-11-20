import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class jwtIntercepter implements HttpInterceptor {
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      if (typeof window !== 'undefined' && localStorage) {
        const token = localStorage.getItem('token');
  
        if (token) {
          const authRequest = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
          return next.handle(authRequest);
        }
      }
  
      return next.handle(req);
    }
  }
  