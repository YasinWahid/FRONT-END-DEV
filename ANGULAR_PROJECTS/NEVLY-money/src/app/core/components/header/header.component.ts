import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  isSidebarVisible: boolean = false;

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  @HostListener('document:click', ['$event'])
  closeSidebarOnClickOutside(event: MouseEvent): void {
 
    const sidebarMenu = document.getElementById('sidebarMenu');
    const menuToggleButton = document.querySelector('.navbar-toggler');

    if (sidebarMenu && menuToggleButton) {
      if (!sidebarMenu.contains(event.target as Node) && !menuToggleButton.contains(event.target as Node)) {
        this.isSidebarVisible = false; 
      }
    }
  }
}
