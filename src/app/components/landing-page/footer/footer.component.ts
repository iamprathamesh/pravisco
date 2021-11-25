import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ToasterService } from "../../toaster/toaster.service";

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyrightYear = new Date().getFullYear();
  @Input() stickyFooter: boolean = false;
  @ViewChild('email', { static: true }) email: any;

  constructor(private toasterService: ToasterService) { }

  ngOnInit() { }

  subscribeToNewsletter() {
    const inp = this.email.nativeElement as any;
    if (inp.value == '') return;

    inp.value = '';
    this.toasterService.createToast('Success', 'You will recieve email from now.');
  }
}