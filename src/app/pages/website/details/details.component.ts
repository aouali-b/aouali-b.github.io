import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, of } from 'rxjs';
import { Article, ArticleService } from 'src/app/services/article.service';
import { Website } from 'src/app/services/website.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() name!: string;
  @Input() website_id!: string;
  @Input() articles!: Article[];
  expand: boolean = false;
  selected:string='';

  articles$: Observable<Article[]> = of([]);

  constructor(private apiService: ArticleService) { }

  ngOnInit(): void {
    if (this.name.toLocaleLowerCase() == 'total') {
      this.articles$ = this.apiService.getByWebsite(this.website_id).pipe(
        map(articles => this.sortWebsitesByDateString(articles))
      );
    } else {
      this.articles$ = this.apiService.getNewByWebsite(this.website_id);
    }
    
  }

  private sortWebsitesByDateString(array: Article[]): Article[] {
    return array.sort((a, b) => {
      const dateA = new Date(a.dateString);
      const dateB = new Date(b.dateString);
      return dateB.getTime() - dateA.getTime();
    });
  }

  unSelect(){
    this.selected = ''
    console.log('seelected:',this.selected);
  }
}
