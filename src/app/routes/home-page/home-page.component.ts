import { Component } from '@angular/core';
import {FooterComponent} from "../../shared/ui/footer/footer.component";
import {TopBarComponent} from "../../shared/ui/top-bar/top-bar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TopBarComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
