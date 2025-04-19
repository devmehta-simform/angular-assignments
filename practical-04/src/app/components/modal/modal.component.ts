import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ModalType } from '../../types/modal';
import { DepartmentService } from '../../services/department.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateDto } from '../../types/createDto';

@Component({
  selector: 'app-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements AfterViewInit {
  @Output() create = new EventEmitter<CreateDto>();
  @ViewChild('modalRef') modalRef!: ElementRef;
  modalType: ModalType | null = null;
  departments: string[] = [];
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    deptName: new FormControl(''),
  });

  constructor(
    private modalService: ModalService,
    private departmentService: DepartmentService
  ) {}

  ngAfterViewInit() {
    this.modalService.getModal$().subscribe((modalType) => {
      const modal = this.modalRef.nativeElement;
      if (modal instanceof HTMLDialogElement) {
        this.myForm.reset();
        this.modalType = modalType;
        if (modalType === 'user') {
          this.myForm.controls.deptName.addValidators(Validators.required);
          this.myForm.controls.deptName.updateValueAndValidity();
          this.departments = this.departmentService
            .getAllDepartments()
            .map((d) => d.name);
          modal.showModal();
        } else if (modalType === 'department') {
          this.myForm.controls.deptName.removeValidators(Validators.required);
          this.myForm.controls.deptName.updateValueAndValidity();
          modal.showModal();
        }
      }
    });
  }

  handleSubmit() {
    if (this.myForm.valid === true) {
      const name = this.myForm.controls.name.value;
      if (this.modalType === 'department') {
        if (name !== null) {
          this.create.emit({ type: 'department', data: { name } });
          this.closeModal();
        }
      } else if (this.modalType === 'user') {
        const deptName = this.myForm.controls.deptName.value;
        if (name && deptName) {
          this.create.emit({ type: 'user', data: { name, deptName } });
          this.closeModal();
        }
      }
    }
  }

  closeModal() {
    if (this.modalRef.nativeElement instanceof HTMLDialogElement)
      this.modalRef.nativeElement.close();
  }
}
