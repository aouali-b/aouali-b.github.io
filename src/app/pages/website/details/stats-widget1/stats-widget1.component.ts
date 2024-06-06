import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-widget1',
  templateUrl: './stats-widget1.component.html',
  styles: [`
  .ellipsis {
    display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* Number of lines to show */
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: calc(1em * 1.2 * 3); /* Adjust this value: 1em * line-height * number of lines */
  line-height: 1.2;
  }`]
})
export class StatsWidget1Component {
  @Input() title = '';
  @Input() date = '';
  @Input() description = '';
  @Input() url = '';
  @Input() is_new:boolean = false;

  constructor() {}
}
