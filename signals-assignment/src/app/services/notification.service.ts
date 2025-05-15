import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notification: WritableSignal<string | null> = signal(null);

  constructor() {}

  getNotification() {
    return this.notification.asReadonly();
  }

  showNotification(message: string) {
    this.notification.set(message);
    setTimeout(() => this.hideNotification(), 1000);
  }

  hideNotification() {
    this.notification.set(null);
  }
}
