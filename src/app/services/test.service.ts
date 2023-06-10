import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../model/Movies';
import { Article } from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  
  addMovies(data:Movies):Observable<Movies>{
    return this.http.post<Movies>('http://localhost:3000/Movies',data)
      }
     fetchMovies():Observable<Movies[]>{
     return this.http.get<Movies[]>('http://localhost:3000/Movies')
     }
     removeMovies(id:any){
      return this.http.delete<Movies>('http://localhost:3000/Movies/'+id)
     }
     getMoviesById(id:any):Observable<Movies>{
      return this.http.get<Movies>('http://localhost:3000/Movies/'+id)
     }
     updateMovies(data:Movies,id:any):Observable<Movies>{
      return this.http.put<Movies>('http://localhost:3000/Movies/'+id,data)
        }
      
      
      
            fetchArticle():Observable<Article[]>{
           return this.http.get<Article[]>('http://localhost:3000/Article')
           }
           removeArticle(id:any){
            return this.http.delete<Article>('http://localhost:3000/Article/'+id)
           }
           getArticleById(id:any):Observable<Article>{
            return this.http.get<Article>('http://localhost:3000/Article/'+id)
           }
           updateArticle(data:Article,id:any):Observable<Article>{
            return this.http.put<Article>('http://localhost:3000/Article/'+id,data)
              }
}
