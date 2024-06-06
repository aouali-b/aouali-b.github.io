import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Website, WebsiteService } from 'src/app/services/website.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {

  @Output() refresh = new EventEmitter();

  websiteModel: Website = {
    _id: '',
    title: '',
    url: '',
    last_update: '',
    is_changed: false,
    is_deleted: false,
    status: 'Active',
    frequency: 'D'
  };

  constructor(private apiService: WebsiteService, private cdr: ChangeDetectorRef) { }

  onSubmit(myForm: NgForm) {
    if (myForm && myForm.invalid) {
      return;
    }

    const successAlert: SweetAlertOptions = {
      icon: 'success',
      title: 'Success!',
      text: 'Website created successfully!',
      timer: 1000,
      showConfirmButton:false
    };
    const errorAlert: SweetAlertOptions = {
      icon: 'error',
      title: 'Error!',
      text: '',
    };

    console.log('Value:',myForm.value);
    
    this.apiService.create(myForm.value).subscribe({
      next: (res) => {
        console.log('Creation result:',res);
        myForm.resetForm();
        this.refresh.emit(null);
        Swal.fire(successAlert);
      },
      error: (err: any) => {
        console.error('Err: ',err);
        Swal.fire(errorAlert);
      },
      complete: () => {
        this.cdr.detectChanges();
      }
    })
  }
}
