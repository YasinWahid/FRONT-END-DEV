import { Component } from '@angular/core';

@Component({
  selector: 'app-nevly-plans',
  standalone: false,

  templateUrl: './nevly-plans.component.html',
  styleUrl: './nevly-plans.component.css',
})
export class NevlyPlansComponent {
  plans = [
    {
      name: 'Nevly Starter',
      price: 'FREE',
      description: '',
      features: [
        'Equifax credit score updated monthly',
        'Equifax credit report updated monthly',
        'Real time credit monitoring alerts',
        'Ability to upgrade subscription plan from your dashboard'
      ],
    },
    {
      name: 'Nevly Lite',
      price: '$49.99',
      description:
        'Ready to improve your credit score and get help managing your cash flow issues with an interest free option, this is the plan for you',
      features: ['Three bureau credit reports and scores updated monthly', 
                 'Report audit services',
                 'Real time monitoring alerts',
                 'Rent payment reporting',
                 'Credit builder card access',
                 'Referral program access',
                 'Rent Advance service with credit limits up to $1,500'
                ],
    },
    {
      name: 'Nevly Core',
      price: '$59.99',
      description:
        'Need a bit more fire power than our Lite Plan, here you go. Everything in our Lite Plan plus:',
      features: ['Two years of past rent reporting',
                 'Rent Advance service with credit limits up to $2,000'],
    },
  ];
}
