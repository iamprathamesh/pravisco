import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

export interface Toast {
  title: string | null;
  message: string | null;
}

@Injectable()
export class ToasterService {

  subject: Subject<Toast> = new BehaviorSubject<Toast>({ title: null, message: null });

  constructor() { }

  listen(): Subject<Toast> {
    return this.subject;
  }

  createToast(title: string, message: string): void {
    this.subject.next({ title, message });
  }

}