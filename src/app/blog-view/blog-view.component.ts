import { Component, OnDestroy, OnInit } from '@angular/core';

//Add routing
import{ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit,OnDestroy {

  public currentBlog

  public allBlogs=[
    {
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags":["Humor","Standup Comedy","Comedy"],
      "author":"admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"This is blog 1 description",
      "title":"This is blog 1"
    },
    {
      "blogId":"2",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"This is blog 2 description",
      "title":"This is blog 2"
    },
    {
      "blogId":"3",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"This is blog 3 description",
      "title":"This is blog 3"
    },
  ]

  constructor(private _route: ActivatedRoute,private router:Router) {
    console.log("Blog view Constructor Called")
   }

  ngOnInit(): void {
    let myBlogId=this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId)
    this.getSingleBlogInformation(myBlogId)
    console.log("Blog View Component OnInit is called");
  }

  ngOnDestroy():void{
    console.log("blog view Component destroy is called");
  }

  public getSingleBlogInformation(currentBlog): any{
    for(let blog of this.allBlogs){
      if(blog.blogId==currentBlog){
        this.currentBlog=blog
      }
    }
    console.log(this.currentBlog)
  } 

}
