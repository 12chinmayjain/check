import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    { 
      path: '', 
      redirectTo:'home',
      pathMatch:'full'
    },//default route
    { 
        path: 'home', 
        component: HomeComponent 
    },// Home route
    {
        path:'aboutme',
        component:AboutMeComponent
    },
    {
        path:'projects',
        component:ProjectComponent
    },
    {
        path:'skills',
        component:SkillsComponent
    }
];
