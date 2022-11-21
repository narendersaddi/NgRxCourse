import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/models/posts.models';
import { appState } from 'src/app/store/app.state';
import { deletePost } from '../state/post.actions';
import { getPost } from '../state/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:Observable<Posts[]>
  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPost);
  }
  onDeletePost(id:any){
    if(confirm("Are you sure, want to delete the post?")){
     this.store.dispatch(deletePost({id}));
    }
  }
}
