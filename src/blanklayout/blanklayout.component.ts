import { AboutComponent } from './../components/about/about.component';
import { Component } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { TestymonialsComponent } from '../components/testymonials/testymonials.component';
import { ServicesComponent } from '../components/services/services.component';
import { ContactComponent } from '../components/contact/contact.component';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-blanklayout',
  standalone: true,
  imports: [HomeComponent,AboutComponent,TestymonialsComponent,ServicesComponent,ContactComponent,RouterOutlet,NavComponent,FooterComponent],
  templateUrl: './blanklayout.component.html',
  styleUrl: './blanklayout.component.scss'
})
export class BlanklayoutComponent {

}
