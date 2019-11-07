import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Post } from '../post.model';


@Component({
  selector: 'app-thread-reply',
  templateUrl: './thread-reply.component.html',
  styleUrls: ['./thread-reply.component.css']
})
export class ThreadReplyComponent implements OnInit {

  @Input() cssClass = 'default';
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
