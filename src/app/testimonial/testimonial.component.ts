import { Component, OnInit } from "@angular/core";
import { faAngleLeft, faAngleRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

interface Testmonial {
  testimonial: string;
  name: string;
  img: string;
}

@Component({
  selector: 'app-testimonial',
  templateUrl: 'testimonial.component.html',
  styleUrls: ['testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  faArrowLeft = faAngleLeft;
  faArrowRight = faAngleRight;
  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;

  testimonials: Testmonial[] = [
    {
      testimonial: `We are very happy with pravisco.com; very serious and consistent in their work.
      Vishwas and his team of programmers have always been there for us all the time. This is a company I can recommend to anyone
      to perform any work.`, name: "Alex Smith", img: "../../assets/images/png/alex.jpg"
    },
    {
      testimonial: `We would like to express our satisfaction on the co-operation regarding the development of our web application.
    Prathamesh and the development team did a very professional job. We are satisfied with the solution given to us
    and with the communication flow through the project.`, name: "Marlies Williams", img: "../../assets/images/png/marlies.jpg"
    },
    {
      testimonial: ` I wanted to take a moment to thank you for the services your team has provided.
      Your team has been a pleasure to work with, professional and timely. The only delay in work that
      we have experienced has been due to our own lack of organization managing our projects, not yours.
      Job well done and I hope we can continue to grow together.`, name: "John Blake", img: "../../assets/images/png/john_blake.jpg"
    }
  ]

  currentTestimonial: Testmonial = this.testimonials[0];
  fade: boolean = false;
  counter = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.counter++;
      this.fade = true;
      setTimeout(() => {
        this.currentTestimonial = this.testimonials[this.counter % this.testimonials.length];
        this.fade = false;
      }, 250);
    }, 5000);
  }

  moveRight() {
    this.counter++;
    this.fade = true;
    this.currentTestimonial = this.testimonials[this.counter % this.testimonials.length];
    this.fade = false;
    // setTimeout(() => {

    // }, 250);
  }

  moveLeft() {
    if (this.counter == 0) {
      this.counter = 2;
    } else {
      this.counter--;
    }
    this.fade = true;
    this.currentTestimonial = this.testimonials[this.counter % this.testimonials.length];
    this.fade = false;
    // setTimeout(() => {

    // }, 250);
  }

}