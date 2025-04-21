import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalType } from '../types/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modal$: BehaviorSubject<ModalType | null> =
    new BehaviorSubject<ModalType | null>(null);

  constructor() {}

  getModal$() {
    return this.modal$.asObservable();
  }

  showModal(modalType: ModalType) {
    this.modal$.next(modalType);
  }

  closeModal() {
    this.modal$.next(null);
  }
}
