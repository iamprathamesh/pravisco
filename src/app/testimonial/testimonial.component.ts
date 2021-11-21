import { Component, OnInit } from "@angular/core";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonial',
  templateUrl: 'testimonial.component.html',
  styleUrls: ['testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  faArrowLeft = faAngleLeft;
  faArrowRight = faAngleRight;

  constructor() { }

  ngOnInit() { }

}