import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-terms',
  standalone: false,
  
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {

  openModal(): void {
    const modalElement = document.getElementById('termsModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

}
