import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";
import { Observable } from "rxjs";

interface registerModel{
    name:string,
    email:string,
    password:string
  }

  interface login{
    email:string,
    password:string
  }
  
@Injectable({
    providedIn:'root'
})

export class Authservice {
    constructor (private http:HttpClient){}

    api = environment.baseUrl

    // register
    register(data:registerModel):Observable<any>{
        return this.http.post(`${this.api}/auth/register`,data)
    }

    // login 
    loginpost(data:login):Observable<any>{
      return this.http.post(`${this.api}/auth/login`,data)
    }
}