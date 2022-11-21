import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Posts } from 'src/app/models/posts.models';
import { appState } from 'src/app/store/app.state';
import { updatePost } from '../state/post.actions';
import { getPostById } from '../state/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  post:Posts;
  postForm:FormGroup;
  postSubscription:Subscription;
  constructor(private route:ActivatedRoute, private store:Store<appState>, private router:Router) { }

  ngOnInit(): void {
  
    this.postSubscription = this.route.paramMap.subscribe(parms =>{
      const id = parms.get('id');
      this.store.select(getPostById, {id}).subscribe(data=> {
        this.post = data;
        console.log(this.post);
        this.createForm();
      });
    });


  }
  createForm(){
    this.postForm = new FormGroup({
      title:new FormControl(this.post.title, [Validators.required, Validators.minLength(6)]),
      description:new FormControl(this.post.description, [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit(){
    if(!this.postForm.valid){
      return;
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    //dispatch the post

    const post:Posts = {
      id:this.post.id,
      title,
      description
    };

    this.store.dispatch(updatePost({post}));
    this.router.navigate(['posts']);
  }

  ngOnDestroy(): void {
      if(this.postSubscription) {
        this.postSubscription.unsubscribe();
      }
  }
}
