import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from "./news/news.component";
import { TasksComponent } from "./tasks/tasks.component";
import { ToolsComponent } from "./tools/tools.component";

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'news-component', component: NewsComponent },
  { path: 'tasks-component', component: TasksComponent },
  { path: 'tools-component', component: ToolsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
