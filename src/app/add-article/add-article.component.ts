import { Component } from '@angular/core';
import { Article } from '../model/Article';
import { TestService } from '../services/test.service';
import { Router } from '@angular/router';
import { Movies } from '../model/Movies';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  constructor(private http : TestService, private router : Router){}
  addMovie(movie:Movies){
    movie.raiting=0
    movie.nomSalle="Carthage"
    this.http.addMovies(movie).subscribe(
      () => {
        console.log("film ajouté")
        this.router.navigate(['/home'])

      },
      (err) => {
        console.log(err)
      }
    );}
}
