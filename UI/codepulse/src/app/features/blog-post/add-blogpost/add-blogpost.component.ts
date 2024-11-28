import { BlogPostService } from './../services/blog-post.service';
import { Component } from '@angular/core';
import { AddBlogPost } from '../model/add-blogpost-request.model';
import { ThisReceiver } from '@angular/compiler';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent {

  model: AddBlogPost;

  constructor(private blogPostService: BlogPostService, private router: Router){
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featuredImageUrl: '',
      author: '',
      isVisible: true,
      publishedDate: new Date()
    }
  }

  onFormSubmit() : void {
    this.blogPostService.cretaeBlogPost(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/blogposts');
      }
    });
  }

}
