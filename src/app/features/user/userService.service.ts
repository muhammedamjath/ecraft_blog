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

    // get drafted blogs
    getDraftedBlogs(data:blogReq):Observable<any>{
        return this.http.post(`${this.api}/user/getDrafts`,data)
    }

    // get single blog
    getSingleBlog(id:string):Observable<any>{
        return this.http.get(`${this.api}/user/getSingleBlog/${id}`)
    }

    // delete blog
    deleteBlog(id:string):Observable<any>{
        return this.http.delete(`${this.api}/user/delete/${id}`)
    }

    // get userData
    getUserData():Observable<any>{
        return this.http.get(`${this.api}/user/userData`)
    }

    // update the type of blog to posted
    updateTypeToPost(id:string):Observable<any>{
        return this.http.patch(`${this.api}/user/blogPost`,{id})
    }

    // update blog
    updateBlog(data:blog):Observable<any>{
        return this.http.put(`${this.api}/user/updateBlog`,data)
    }
}