import { Observable } from 'rxjs';
import { BlogPost } from './../model/blog-post.model';
import { BlogPostService } from './../services/blog-post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  blogPost$?: Observable<BlogPost[]>

  constructor(private blogPostService: BlogPostService){

  }

  ngOnInit(): void {
    this.blogPost$ = this.blogPostService.getAllBlogPost();
  }

}
