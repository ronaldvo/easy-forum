import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Thread, ThreadId } from './thread.model';
import { Post, PostId } from './post.model';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  threads$: Observable<Thread[]>;
  posts$: Observable<Post[]>;

constructor(private fs: AngularFirestore) { }

getThreads() {
  return this.fs.collection<Thread>('threads', ref => ref
      .orderBy('date', 'desc')
    )
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Thread;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
}

getThread(threadId: string) {
  return this.fs.doc<Thread>('threads/' + threadId).valueChanges();
}

deleteThread(threadId: string) {
  return this.fs.doc<Thread>('threads/' + threadId).delete();
}

addThread(ti: string, te: string) {
  const thread: Thread = {
    title: ti,
    text: te,
    date: new Date()
  };

  this.fs.collection<Thread>('threads').add(thread);
}

getPosts(threadId: string) {
  return this.fs.collection<Post>('posts', ref => ref
      .orderBy('date', 'desc')
      .where('threadId', '==', threadId)
    )
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        console.log(data);
        return { id, ...data };
      }))
    );
}

savePost(post: Post) {
  return this.fs.collection<Post>('posts').add(post);
}

savePostReply(postId: string, post: Post) {
  return this.fs.doc<Post>('posts/' + postId).collection<Post>('posts').add(post);
}

deletePost(postId: string) {
  return this.fs.doc<Thread>('posts/' + postId).delete();
}

}
