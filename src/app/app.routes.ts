import { Routes } from '@angular/router';
import { InsertregComponent } from './insertreg/insertreg.component';
import { LoginComponent } from './login/login.component';
import { FirComponent } from './fir/fir.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"reg",component:InsertregComponent},
    {path:"login",component:LoginComponent},
    {path:"fir",component:FirComponent},
    
];
