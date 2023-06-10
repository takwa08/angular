import { Component, NgModule, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Movies } from '../model/Movies';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  form!:NgModule
Movies !: Movies[]
constructor(private http:TestService,private router : Router){}
ngOnInit(): void {
 const h= document.getElementById("cherche");
 console.log(h)
this.fetchAll()  }
fetchAll()
{
this.http.fetchMovies().subscribe((Movies)=>{this.Movies = Movies})
}


remove(id:any)
{
  this.http.removeMovies(id).subscribe(()=>
  {
    this.router.navigate(['home'])
    window.location.reload()
    console.log("Movies removed")
  },
  );
}
rating(movie :Movies)
{
  if(movie.raiting<5)
  {
    movie.raiting++
    this.http.updateMovies(movie,movie.id).subscribe(()=>{
      console.log("persist")
    })
  }
}
Event(Event:Event)
{
  //Event.target?.dispatchEvent()
  console.log(Event)
}
}
