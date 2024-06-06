import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Distribution, DistributionService } from 'src/app/services/distribution.service';
import { Website, WebsiteService } from 'src/app/services/website.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  distributionModel: Distribution = {
    _id: '',
    name: '',
    email: '',
    company: '',
    is_deleted: false
  };

  constructor(private apiService: DistributionService) { }

  onSubmit(myForm: NgForm) {
    if (myForm && myForm.invalid) {
      return;
    }

    console.log('Value:',myForm.value);
    
    this.apiService.create(myForm.value).subscribe({
      next:(res)=>{
        console.log('Res:',res);
      },
      error:(err)=>{
        console.error('Eerror::',err);
        
      }
    })
  }
}
