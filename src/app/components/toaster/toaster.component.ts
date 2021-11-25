import { Component, OnInit, Renderer2, ViewChild } from "@angular/core";
import { Toast, ToasterService } from "./toaster.service";

@Component({
  selector: 'app-toaster',
  templateUrl: 'toaster.component.html',
  styleUrls: ['toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  toast: Toast = { title: null, message: null };
  @ViewChild('toaster', { static: true }) toaster: any;

  constructor(private renderer2: Renderer2, private toasterService: ToasterService) { }

  ngOnInit() {
    const toaster = this.toaster.nativeElement;
    this.renderer2.setStyle(toaster, 'right', `calc(-${toaster.offsetWidth}px - 50px)`);

    this.toasterService.listen().subscribe((toast: Toast) => {
      if (toast.message && toast.title) {
        this.toast = toast;
        setTimeout(() => {
          this.renderer2.setStyle(toaster, 'transition', '0.2s');
          this.renderer2.setStyle(toaster, 'right', 0);

          setTimeout(() => {
            this.renderer2.setStyle(toaster, 'right', `calc(-${toaster.offsetWidth}px - 50px)`);
          }, 1700);
        }, 200);
      }
    });
  }

}