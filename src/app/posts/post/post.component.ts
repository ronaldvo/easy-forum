import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';
import { map, toArray, mergeMap } from 'rxjs/operators';

import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.posts$ = this.postsService.getPosts(this.route.snapshot.paramMap.get('id'));

    this.posts$.subscribe(data => {
      console.log(data);
    })
  }

  delete(id: string) {
    this.postsService.deletePost(id);
  }
}
