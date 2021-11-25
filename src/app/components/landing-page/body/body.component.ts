import { Component, OnInit, ViewChild } from "@angular/core";
import { ToasterService } from "../../toaster/toaster.service";

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.scss']
})
export class BodyComponent implements OnInit {

  carousels: string[] = ["../../assets/images/png/carousel-1.png", "../../assets/images/png/carousel-2.png", "../../assets/images/png/carousel-3.png", "../../assets/images/png/carousel-4.png", "../../assets/images/png/carousel-5.png"]
  carouselImage: string = this.carousels[0];
  fade: boolean = false;
  @ViewChild('email', { static: true }) email: any;

  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
    let counter = 1;
    setInterval(async () => {
      this.fade = true;
      setTimeout(() => {
        this.carouselImage = this.carousels[counter % this.carousels.length];
        counter++;
        this.fade = false;
      }, 250);
    }, 3000);
  }

  subscribeToNewsletter() {
    const inp = this.email.nativeElement as any;
    if (inp.value == '') return;

    inp.value = '';
    this.toasterService.createToast('Success', 'You will recieve email from now.');
  }

}