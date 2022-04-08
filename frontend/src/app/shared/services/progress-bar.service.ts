import { Injectable } from '@angular/core';
import { NgProgressRef } from '@ngx-progressbar/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  progressRef: NgProgressRef;
  default: string = '#1B95E0';
  success: string = '#42A948';
  error: string = '#a94442';
  currentColor: string = this.default

  constructor() { }

  startLoading(){
    this.currentColor = this.default;
    this.progressRef.start();
  }

  completeLoading() {
    this.progressRef.complete();
  }

  setSuccess() {
    this.currentColor = this.success;
  }

  setError() {
    this.currentColor = this.error;
  }
}
