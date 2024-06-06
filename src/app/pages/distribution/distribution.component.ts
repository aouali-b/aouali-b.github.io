import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Distribution, DistributionService } from 'src/app/services/distribution.service';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss'],
})
export class DistributionComponent implements OnInit, OnDestroy {
  distributions$: Observable<Distribution[]> = of([]);
  distribution$: Observable<Distribution> = of();
  selected: string | null = '';
  addDistributionMode:boolean = false;
  reloadEvent: EventEmitter<boolean> = new EventEmitter();
  constructor(private apiService: DistributionService) { }

  ngOnInit(): void {
    this.distributions$ = this.apiService.getAll();//temporary line
    // .subscribe({
    //   next: (res: Distribution[]) => {
    //     console.log('RES:_',res);
    //   },
    //   error: (err: any) => { },
    //   complete: () => { }
    // })
  }


  activeAdd(){
    // hide/show the Adding form
    this.addDistributionMode =! this.addDistributionMode;
  }

  ngOnDestroy(): void {
    this.reloadEvent.unsubscribe();
  }

}
