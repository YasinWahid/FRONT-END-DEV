import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nevly-services',
  standalone: false,
  templateUrl: './nevly-services.component.html',
  styleUrl: './nevly-services.component.css'
})
export class NevlyServicesComponent {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  cards = [
    {
      title: 'Credit Monitoring',
      description: 'We provide you with real time scores and easy-to-read credit reports. We track any changes in your scores or underlying reports to prevent identity theft and to deliver personalized insights and tips to help you improve your scores. This service helps: ',
      bulletPoints: [
        'Prvent identity theft',
        'Stay on top of your credit profile',
        'Design personalized plans for score imporovement'
      ],
      imgSrc: 'imgs/service-cre.png'
    },
    {
      title: 'RENT REPORTING ',
      description: 'We will report each on-time rent payment that you make to all three credit bureaus. We also can report up to two years of your past rental payments. Reporting these payments can result in an immediate increase in your score and each on-time payment could increase it even higher. This service can:',
      bulletPoints: [
        'Add another trade line to your credit profile',
        ' Increase scores quickly',
        'Build strong bill paying habit'
      ],
      imgSrc: 'imgs/service-rr.png'
    },
    {
      title: 'Report Auditing ',
      description: 'We leverage millions of data points to help identify legitimate errors on your credit report and provide you with the infrastructure to get those items removed. These errors can consist of incorrect personal data or outdated or inaccurate information on personal debts and other things in between. This service can: ',
      bulletPoints: [
        'Identify errors on your credit report',
        'Show you the impact of a potential change to your report',
        'Track updates in real time'
      ],
      imgSrc: 'imgs/service-ra.png'
    },
    {
      title: 'PATHWAY CARD',
      description: 'Our Pathway Card is designed as a powerful tool in your credit building journey. Simply use our card like you would your normal debit card and watch your score improve with your everyday purchases. Benefits of the card: ',
      bulletPoints: [
        'No minimum security deposit',
        'No annual fees and no interest ',
        'Increase scores with everyday purchases',
        'Cash back rewards'
      ],
      imgSrc: 'imgs/service-pa.png'
    },
    {
      title: 'RENT ADVANCES',
      description: 'We’ve learned that tackling the root causes of poor credit is just as important as helping people improve their credit. That’s why we designed our Rent Advance service. The first service of its kind that helps consumers better manage their cash flow by providing access to interest free cash advances. The service provides: ',
      bulletPoints: [
        'Interest free advances up to $2,000',
        'Utilizes progressive underwriting models',
        'Credit limits that increase as the consumer’s financial health strengthens',
        'A bridge to other lending products'
      ],
      imgSrc: 'imgs/service-rad.png'
    },
    {
      title: 'REFERRAL EARNINGS ',
      description: 'Our referral earnings program makes it easier for consumers to do the work required to strengthen their financial health and leverage their personal networks to offset the cost of our services. The service includes: ',
      bulletPoints: [
        ' Monthly payments of up to $15 per month for each new member',
        'No caps on the amount a member can earn',
        'No limit on how long they can be paid for a referral',
        'Timely payments made into the bank account of their choice'
      ],
      imgSrc: 'imgs/service-re.png'
    }
  ];

  activeIndex = 0;
  popupCard: any = null;

  scrollToIndex(index: number) {
    this.activeIndex = index;
    const cardWidth = 370;
    const containerWidth = this.scrollContainer.nativeElement.offsetWidth;
    const scrollAmount = (index * cardWidth) - (containerWidth / 2) + (cardWidth / 2);
    this.scrollContainer.nativeElement.scrollTo({ left: scrollAmount, behavior: 'smooth' });

    setTimeout(() => {
      const cards: HTMLElement[] = Array.from(this.scrollContainer.nativeElement.children) as HTMLElement[];
      cards.forEach((card, i) => {
        if (i === index) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }, 300);
  }

  openPopup(card: any) {
    this.popupCard = card;
  }

  closePopup() {
    this.popupCard = null;
  }
}
