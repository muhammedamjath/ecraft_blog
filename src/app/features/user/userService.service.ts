import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";
import { blog } from "./model/blogPost";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class UserService {
    constructor(private http:HttpClient ){}

    api = environment.baseUrl

    // blog post
    blogPost(data:blog):Observable<any>{
        return this.http.post(`${this.api}/user/blogPost`,data)
    }
}