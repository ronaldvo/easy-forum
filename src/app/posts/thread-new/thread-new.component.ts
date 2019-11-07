import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-thread-new',
  templateUrl: './thread-new.component.html',
  styleUrls: ['./thread-new.component.css']
})
export class ThreadNewComponent implements OnInit {

  thread: FormGroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl('')
  });

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.postsService.addThread(this.thread.controls.title.value, this.thread.controls.text.value);
    this.router.navigate(['']);
  }
}
