import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";
import { blog } from "./model/blogPost";
import { Observable } from "rxjs";


interface blogReq{
    searchIndex:string,
    pageNumber:number,
    pageSize:number
}

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

    // get posted  blogs in landing page
    getAllBlogs(data:blogReq):Observable<any>{
        return this.http.post(`${this.api}/user/getAllblogs`,data)
    }

    // get all blogs in user blogs component
    getBlogs(data:blogReq):Observable<any>{
        return this.http.post(`${this.api}/user/getBlogs`,data)
    }
}