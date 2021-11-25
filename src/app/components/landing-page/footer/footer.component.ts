import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyrightYear = new Date().getFullYear();
  @Input() stickyFooter: boolean = false;

  constructor() { }

  ngOnInit() { }

  subscribeToNewsletter() {
    const inp = document.getElementById('email') as any;
    inp.value = '';
  }
}