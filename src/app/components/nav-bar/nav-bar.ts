import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navigation } from '../../services/navigation';
import { navItem } from '../../models/nav-item';


@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})

export class NavBar {

navigationService = inject(Navigation);
navigation: navItem[] = this.navigationService.getNavItems();

}
