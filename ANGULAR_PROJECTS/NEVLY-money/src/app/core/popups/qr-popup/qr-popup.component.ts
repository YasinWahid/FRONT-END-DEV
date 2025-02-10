import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-popup',
  standalone: false,
  templateUrl: './qr-popup.component.html',
  styleUrl: './qr-popup.component.css'
})
export class QrPopupComponent implements OnInit {
    isPopupVisible = false;  
  
    ngOnInit() {
      this.openPopup();
    }
    openPopup() {
      this.isPopupVisible = true;
    }
    closePopup() {
      this.isPopupVisible = false;
    }
  
  }