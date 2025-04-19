import { Component } from '@angular/core';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { ModalType } from './types/modal';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [DepartmentListComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  openModal(modalType: ModalType) {
    this.modalService.showModal(modalType);
  }

  constructor(private modalService: ModalService) {}

  title = 'practical-04';
}
