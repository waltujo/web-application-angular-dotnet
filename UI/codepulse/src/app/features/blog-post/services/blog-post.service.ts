import { Injectable } from '@angular/core';
import { AddBlogPost } from '../model/add-blogpost-request.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../model/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }

  cretaeBlogPost(data : AddBlogPost): Observable<BlogPost>{
    return this.http.post<BlogPost>(`${environment.apiBaseUrl}/api/BlogPost`, data);
  }

  getAllBlogPost() : Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/BlogPost`);
  }
}
