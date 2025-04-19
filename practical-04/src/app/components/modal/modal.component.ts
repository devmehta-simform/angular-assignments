import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ModalType } from '../../types/modal';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @ViewChild('modalRef') modalRef!: ElementRef;
  modalType: ModalType | null = null;
  departments: string[] = [];

  constructor(
    private modalService: ModalService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit() {
    this.departments = this.departmentService
      .getAllDepartments()
      .map((d) => d.name);

    this.modalService.getModal$().subscribe((modalType) => {
      const modal = this.modalRef.nativeElement;
      if (modal instanceof HTMLDialogElement) {
        modal.showModal();
        this.modalType = modalType;
      }
    });
  }

  handleSubmit() {}
}
