import { config } from './app.config.server';
import { InMemoryScrollingOptions, Routes } from '@angular/router';
import { BlanklayoutComponent } from '../blanklayout/blanklayout.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { TestymonialsComponent } from '../components/testymonials/testymonials.component';
import { ContactComponent } from '../components/contact/contact.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { ServicesComponent } from '../components/services/services.component';

export const routes: Routes = [{path:'',component:BlanklayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'testymonials',component:TestymonialsComponent},
    {path:'contact',component:ContactComponent},
    {path:'service',component:ServicesComponent}
]},
{path:'**',component:NotfoundComponent}
];
const scroll:InMemoryScrollingOptions = {
    scrollPositionRestoration:'enabled'
}