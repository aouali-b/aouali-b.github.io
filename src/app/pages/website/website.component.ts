import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Website, WebsiteService } from 'src/app/services/website.service';
import { DatePipe } from '@angular/common';
import { Article, ArticleService } from 'src/app/services/article.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss'],
  providers: [DatePipe]
})
export class WebsiteComponent implements OnInit, OnDestroy {
  websites$: Observable<Website[]> = of([]);
  website$: Observable<any> = of();
  articles$: Observable<Article[]> | null = null;
  selected: string = '';
  loadGenInfo: boolean = false;
  addWebsiteMode: boolean = false;
  reloadEvent: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('noticeSwal')
  noticeSwal!: SwalComponent;

  swalOptions: SweetAlertOptions = {};

  constructor(private apiService: WebsiteService, private articleService: ArticleService, private datePipe: DatePipe, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.websites$ = this.apiService.getAll();
  }

  viewGeneralInfo(website_id: string) {
    this.addWebsiteMode = false;
    this.loadGenInfo = true;
    if (website_id == this.selected) {
      this.selected = '';
      this.website$ = new Subject<Website>();
      this.articles$ = null;
      this.loadGenInfo = false;
      return;
    }
    this.selected = website_id;
    this.website$ = this.apiService.getById(website_id);
    this.loadGenInfo = false;
  }

  activeAdd() {
    //hide if there is any GenralInfo/Details showen
    this.selected = '';
    this.website$ = new Subject<Website>();
    this.articles$ = null;
    this.loadGenInfo = false;
    // hide/show the Adding form
    this.addWebsiteMode = !this.addWebsiteMode;
  }

  openDetails(title: any) {
    console.log('Opeen details...', title);
    if (title == "Total") {
      this.articles$ = this.articleService.getByWebsite(this.selected);
    } else {
      this.articles$ = this.articleService.getNewByWebsite(this.selected);
    }
  }

  removeWebsite(website_id: string) {
    const successAlert: SweetAlertOptions = {
      icon: 'success',
      title: 'Success!',
      text: 'Deleted successfully!',
      timer: 1000,
      showConfirmButton: false
    };
    const errorAlert: SweetAlertOptions = {
      icon: 'error',
      title: 'Error!',
      text: '',
    };

    this.apiService.delete(website_id).subscribe({
      next: (res: any) => {
        console.log('Deleted:_', res);
        this.websites$ = this.apiService.getAll();
        Swal.fire(successAlert);
      },
      error: (err: any) => {
        console.error('Error:', err);
        Swal.fire(errorAlert);
      },
      complete: () => { this.cdr.detectChanges(); }
    })
  }

  convertDate(originalDate: string) {
    return this.datePipe.transform(originalDate, 'yyyy-MM-dd HH:mm')!;
  }

  buildAvatar(title: string) {
    const colorClasses = ['success', 'info', 'warning', 'danger', 'primary'];
    const randomColorClass = ['success', 'info', 'warning', 'danger', 'primary'][Math.floor(Math.random() * 5)];

    const initials = title[0].toUpperCase();
    const symbolLabel = `
              <div class="symbol-label fs-3 bg-light-${randomColorClass} text-${randomColorClass}">
                ${initials}
              </div>
            `;
    ''
    return symbolLabel;
  }

  refresh(){
    this.websites$ = this.apiService.getAll();
  }

  showAlert(swalOptions: SweetAlertOptions) {
    let style = swalOptions.icon?.toString() || 'success';
    if (swalOptions.icon === 'error') {
      style = 'danger';
    }
    this.swalOptions = Object.assign({
      buttonsStyling: false,
      confirmButtonText: "Ok, got it!",
      customClass: {
        confirmButton: "btn btn-" + style
      }
    }, swalOptions);
    this.cdr.detectChanges();
    this.noticeSwal.fire();
  }

  ngOnDestroy(): void {
    this.reloadEvent.unsubscribe();
  }

}
