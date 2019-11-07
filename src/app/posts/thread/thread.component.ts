import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Thread } from '../thread.model';
import { PostsService } from '../posts.service';



@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  thread$: Observable<Thread>;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.thread$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.postsService.getThread(params.get('id'))
      )
    );
  }
}
