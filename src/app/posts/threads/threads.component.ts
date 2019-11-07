import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';
import { map, toArray, mergeMap } from 'rxjs/operators';

import { Thread, ThreadId } from '../thread.model';



@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  threads$: Observable<ThreadId[]>;

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit() {
    this.getThreads();
  }

  navigateToThread(e) {
    this.router.navigate(['/thread', e.id]);
  }

  getThreads() {
    this.threads$ = this.postsService.getThreads();

    this.threads$.pipe(
      map(data => {
        return console.log(data);
      })
    );
  }
}
