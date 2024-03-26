import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlanklayoutComponent } from '../blanklayout/blanklayout.component';
import { NavComponent } from '../components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlanklayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'filterationtask';
}
