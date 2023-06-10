import { Component, OnInit } from '@angular/core';
import { Article } from '../model/Article';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  article= new Article()
  constructor( private route :ActivatedRoute,private service : TestService,private router:Router){}
  ngOnInit(): void {
    this.service.getArticleById( this.route.snapshot.params['id']).subscribe((data:Article)=>{
      this.article=data
          })
  }
  update(a:Article) {
    this.service.updateArticle(a,this.route.snapshot.params['id']).subscribe(()=>{
      this.router.navigate(['/home'])

    })
  }

}
