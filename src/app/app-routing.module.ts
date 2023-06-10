import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Article } from './model/Article';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: ArticleDetailsComponent },
  { path: 'update/:id', component: UpdateComponent },

  { path: 'addMovie', component: AddArticleComponent },
  {path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
