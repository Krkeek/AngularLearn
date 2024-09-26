import { Component } from '@angular/core';
import {FooterComponent} from "../../shared/ui/footer/footer.component";
import {TopBarComponent} from "../../shared/ui/top-bar/top-bar.component";
import {RegisterFormComponent} from "../../shared/ui/register-form/register-form.component";
import {DataTableComponent} from "../../shared/ui/data-table/data-table.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TopBarComponent, FooterComponent, RegisterFormComponent, DataTableComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
