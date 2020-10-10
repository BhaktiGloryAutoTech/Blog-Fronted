import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  public allBlogs=[
    {
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags":[],
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
  constructor() { 
    console.log("Home Component Constructor is called");
  }

  ngOnInit(): void {
    console.log("Home Component OnInit is called");
  }

  ngOnDestroy(): void{
    console.log("Home Component OnDestroy is called");
  }
}
