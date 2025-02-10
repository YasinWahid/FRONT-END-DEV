import { Component, ViewChild } from '@angular/core';
import { TermsComponent } from '../../popups/terms/terms.component';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @ViewChild(TermsComponent) termsModal!: TermsComponent;

  openTermsModal() {
    this.termsModal.openModal();
  }
}
