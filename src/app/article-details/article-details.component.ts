import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../services/test.service';
import { Article } from '../model/Article';
import { Movies } from '../model/Movies';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
movie= new Movies()

constructor(private route :ActivatedRoute,private service :TestService){}
  id!:any
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
    this.service.getMoviesById(this.route.snapshot.params['id']).subscribe((data:Movies)=>{
this.movie=data
this.service.updateMovies(this.movie,this.route.snapshot.params['id']).subscribe(()=>{})
console.log(this.movie)
    })
    
  }

}
