import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {Component, OnInit} from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  constructor(private route: ActivatedRoute,
   // private postService: PostsService,
    private router: Router) { }
post: Post
  
  ngOnInit() {
    // this.post = this.route.snapshot.data.post
    this.route.data.subscribe(data=> {
  this.post = data.post
})
    // this.route.params.subscribe((params: Params) => {
    //   //console.log('Params: ', params)
    //   this.post = this.postService.getById(+params.id)
    // })
  }

  loadPost() {
    this.router.navigate(['/posts', 44])
  }
}
