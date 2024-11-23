import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class AdminService {
    constructor(private http:HttpClient){}

    api = environment.baseUrl

    // get full count
    getAllCount():Observable<any>{
        return this.http.get(`${this.api}/admin/getallcount`)
    }

    // get users list
    getUsersList():Observable<any>{
        return this.http.get(`${this.api}/admin/getUsers`)
    }

    // get drafted blog
    getDraftedBlogs():Observable<any>{
        return this.http.get(`${this.api}/admin/getdraftedblogs`)
    }

    // get full blogs
    getFullBlogs():Observable<any>{
        return this.http.get(`${this.api}/admin/getallblogs`)
    }

    // get published blogs
    getPublishedBlogs():Observable<any>{
        return this.http.get(`${this.api}/admin/getpostedblogs`)
    }
}