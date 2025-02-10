import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: false,

  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
})
export class FaqsComponent {
  services = [
    {
      name: 'Nevly Money Service:',
      description:
        'Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.',
      questions: [
        {
          q: 'How does Nevly Money work?',
          a: 'The way our service works is pretty simple, and we often use a familiar visual to explain it. Imagine a person who calls their local fire department to report that their home is on fire and need the fire department to send a fire truck to their home to put out the fire. The person on the other end of the phone asks the homeowner would they rather they send a fire truck with one hose or another fire truck that has multiple, super powerful hoses. The homeowner says send the truck with the multiple hoses. Nevly Money can best be described using this analogy. There are nearly 100mm Americans in the United States with a poor or bad credit score and the overwhelming majority of those consumers choose to do their best navigating around this problem. Each year a percentage of these Americans decide that they are ready to do something about this problem. Using our analogy, we view these people as being our homeowner. We decided to construct Nevly Money in a way that would deliver the greatest number of services to consumers with the goal being that when the consumer uses as many of these services as possible at the same time, their credit score stands a far greater chance of increasing faster than it would using any one of them in isolation. This is the magic of Nevly Money!',
        },
        {
          q: 'Will you add more services over time and how do you decide which ones to add?',
          a: 'We believe that we definitely will but not simply for the sake of adding more services. We are relentlessly obsessed with designing innovative solutions that not only help consumers improve their credit scores but also that help alleviate many of the root causes that consumers encounter that can increase the chances of a consumer harming their credit scores.',
        },
        {
          q: 'Who is the ideal Nevly Money user?',
          a: 'We believe our services can meet the needs of many different types of consumers. If you are just looking to become more aware of what’s going on with your credit, we have a subscription plan for you. If you are looking to begin your journey of improving your credit profile, we have options for you as well but we have found that there are some core attributes that many consumers share who get the most out of our services: <ul><li>You’ve been a renter in the past or are currently renting and have largely paid your rent on time.</li><li>You use a debit card for your day-to-day expenses.</li><li>You believe that there may be one or more negative items on your credit report that could be eligible for removal.</li><li>Having access to interest free cash advances could help you better manage your cash flow in between paychecks.</li><li>You are willing to do a little bit of work with us to strengthen your</li><li>credit score and your overall financial health.</li></ul>',
        },
        {
          q: 'How much does Nevly Money cost?',
          a: 'We currently have three subscription plans – our Starter Plan, Lite Plan and our Core Plan. Our Starter Plan is a free subscription plan. Our Lite Plan cost $49.99 per month and our Core Plan cost $59.99 per month.',
        },
      ],
    },
    {
      name: 'Pathway Card:',
      description: 'Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.',
      questions: [
        {
          q: 'Will applying require a hard credit check to apply?',
          a: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
        },
        {
          q: 'Do I need to have a Pathway Account to use the Pathway Card?',
          a: 'Yes. We designed our Pathway Card to work with a designated Pathway Account. This approach allows you to move money into your Pathway Account at a pace that is comfortable for you and to build credit at your own pace.',
        },
        {
          q: 'Does Nevly charge any fees for using the Pathway Card?',
          a: 'No way! No fees...period.',
        },
      ],
    },
    {
      name: 'Rent Advances:',
      description: 'Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.',
      questions: [
        {
          q: 'Can you explain to me what your Rent Advance service is?',
          a: 'Our Rent Advance service is a service that we designed to help our members who can use some extra help in between paychecks to help them get by. We advance them money at the beginning of the month around the time they pay their rent and have them pay us back in the middle of the month when they get their second paycheck.',
        },
        {
          q: 'How do I qualify to participate in the Rent Advance service?',
          a: 'You first have to be a subscriber on one of our paid subscription plans. You can apply for the service right from your dashboard and receive an immediate decision.',
        },
        {
          q: 'How much is an advance?How much is an advance?',
          a: 'The amount of an advance will vary based on the amount of your monthly rental payment but in most instances, you will begin with an advance rate of the greater of ten percent (10%) of your monthly rent payment and $150.',
        },
      ],
    },
    {
      name: 'Rent Reporting:',
      description: 'Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.',
      questions: [
        {
          q: 'I sublease a room/apartment. Can I report my monthly rent?',
          a: 'Yes, you can! As long as you have a written agreement with the primary landlord / management company or owner of the home. We are unable to report any rent payments if you only have an agreement with the original renter that signed the rental agreement with the landlord or management company. If you’re not on the main lease – you should request to be added.',
        },
        {
          q: 'Who is responsible to let you know if I move?',
          a: 'We count on you and your landlord to keep us informed so that we can ensure accurate reporting to the credit bureaus. If we receive notice from your landlord that you are no longer renting from them, we will reach out to you for confirmation and then ask would you like to update your rent reporting address.',
        },
        {
          q: 'Can you report my past addresses?',
          a: 'We are able to report the last 24 months of your past rental history (from today back two (2) years) and up to one additional address other than your current address. This helps to add age to your credit profile, which in turn potentially provides a greater increase in your credit score. Of the five (5) factors in determining your credit score, length of credit history contributes 15% to the mix. Upon enrolling, we will reach out to your landlord and confirm all information. Upon confirmation, you will receive credit for the last two (2) years of your rent payments!',
        },
      ],
    },
    {
      name: 'Report Auditing Services:',
      description: 'Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.',
      questions: [
        {
          q: 'What is report auditing?',
          a: 'Report auditing is the process of addressing any questionable negative items that could be hurting your credit profile. If the bureaus and your creditors can’t verify these items are fair and accurate, they are required to remove them.',
        },
        {
          q: 'Can bad credit be corrected or deleted?',
          a: 'The law entitles a consumer to an accurate, fair and substantiated credit profile. If something is on your credit profile that you believe isn’t accurate, the law allows you the right to correct it with the credit bureaus and your creditors.',
        },
        {
          q: 'Can I do this work on my own?',
          a: 'Yes, you most definitely can. You simply need to contact the bureaus and your creditors to address any errors on your credit. That being said, this process can be time consuming and confusing and so millions of people just like you choose to get help. ',
        },
      ],
    },
    {
      name: 'Referral Program:',
      description: 'Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.',
      questions: [
        {
          q: 'How does the Referral Program work?',
          a: 'Each member who has a paid subscription has the option to participate in our Referral Program. If a member chooses to participate, they can sign up directly from their dashboard and upon completion of signing up they can secure a personalized QR code. Any member who signs up for a paid subscription plan utilizing your personalized QR code will entitle you to a monthly payment every month for as long as they remain on a paid subscription plan. We will pay you your total monthly payment each month and you check the status of your payments directly from your personalized dashboard.',
        },
        {
          q: 'How much do I get paid each month for a subscriber under the Referral Program?',
          a: 'For a new member who subscribes for a Lite Plan you will result in you being paid $10 per month and for a new member who subscribes for a Core Plan will result in you being paid $15 per month. ',
        },
        {
          q: 'Is there a limit on the number of referrals I can be paid for?',
          a: 'No there is absolutely no limit on the number of new community members we will pay you for introducing to our product. ',
        },
      ],
    },
  ];
}
