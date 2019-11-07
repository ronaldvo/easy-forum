import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Post } from '../post.model';


@Component({
  selector: 'app-post-reply',
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.css']
})
export class PostReplyComponent implements OnInit {

  reply = false;
  postText: FormControl = new FormControl('');
  newPost: Post;

  constructor(private router: Router, private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
  }

  post() {
    this.newPost = {
      date: new Date(),
      threadId: this.route.snapshot.paramMap.get('id'),
      text: this.postText.value
    };

    this.postsService.savePost(this.newPost);
    this.postText.reset();
  }

  delete() {
    this.postsService.deleteThread(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['']);
  }
}
