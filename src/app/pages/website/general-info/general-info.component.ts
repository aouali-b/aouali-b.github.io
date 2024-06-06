import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from 'src/app/services/article.service';
import { Website } from 'src/app/services/website.service';

@Component({
  selector: 'general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent {
  @Input() website!: Website;
  @Input() articles!: Article[];
  @Output() openDetails = new EventEmitter();

  // @Input() chartColor: string = '';
  // @Input() strokeColor: string = '';
  // @Input() chartHeight: string = '';
  // chartOptions: any = {};


  constructor() { }

  ngOnInit(): void {
    console.log('Website is:', this.website);
    console.log('Articles :', this.articles);

    // this.chartOptions = getChartOptions(
    //   this.chartHeight,
    //   this.chartColor,
    //   this.strokeColor
    // );
  }

  totals(title:string){
    this.openDetails.emit(title);
  }
  // open(popup_title:string) {
    // const modalRef = this.modalService.open(DetailsComponent, { windowClass: 'modal-custom', fullscreen:true, scrollable: true });
    // modalRef.componentInstance.name = popup_title;
    // modalRef.componentInstance.website = this.website;
    // modalRef.componentInstance.articles = this.articles;
    // // Add custom class on modal close
    // modalRef.dismissed.subscribe(() => {
    //   const modalElement = document.querySelector('.modal-custom .modal-dialog');
    //   if (modalElement) {
    //     modalElement.classList.add('slide-out');
    //   }
    // });
  // }
}

//Chart Treatment
// function getChartOptions(
//   chartHeight: string,
//   chartColor: string,
//   strokeColor: string
// ) {
//   const labelColor = getCSSVariableValue('--bs-gray-500');
//   const borderColor = getCSSVariableValue('--bs-gray-200');
//   const color = getCSSVariableValue('--bs-' + chartColor);

//   return {
//     series: [
//       {
//         name: 'Net Profit',
//         data: [30, 45, 32, 70, 40, 40, 40],
//       },
//     ],
//     chart: {
//       fontFamily: 'inherit',
//       type: 'area',
//       height: chartHeight,
//       toolbar: {
//         show: false,
//       },
//       zoom: {
//         enabled: false,
//       },
//       sparkline: {
//         enabled: true,
//       },
//       dropShadow: {
//         enabled: true,
//         enabledOnSeries: undefined,
//         top: 5,
//         left: 0,
//         blur: 3,
//         color: strokeColor,
//         opacity: 0.5,
//       },
//     },
//     plotOptions: {},
//     legend: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       type: 'solid',
//       opacity: 0,
//     },
//     stroke: {
//       curve: 'smooth',
//       show: true,
//       width: 3,
//       colors: [strokeColor],
//     },
//     xaxis: {
//       categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//       labels: {
//         show: false,
//         style: {
//           colors: labelColor,
//           fontSize: '12px',
//         },
//       },
//       crosshairs: {
//         show: false,
//         position: 'front',
//         stroke: {
//           color: borderColor,
//           width: 1,
//           dashArray: 3,
//         },
//       },
//     },
//     yaxis: {
//       min: 0,
//       max: 80,
//       labels: {
//         show: false,
//         style: {
//           colors: labelColor,
//           fontSize: '12px',
//         },
//       },
//     },
//     states: {
//       normal: {
//         filter: {
//           type: 'none',
//           value: 0,
//         },
//       },
//       hover: {
//         filter: {
//           type: 'none',
//           value: 0,
//         },
//       },
//       active: {
//         allowMultipleDataPointsSelection: false,
//         filter: {
//           type: 'none',
//           value: 0,
//         },
//       },
//     },
//     tooltip: {
//       style: {
//         fontSize: '12px',
//       },
//       y: {
//         formatter: function (val: number) {
//           return '$' + val + ' thousands';
//         },
//       },
//       marker: {
//         show: false,
//       },
//     },
//     colors: ['transparent'],
//     markers: {
//       colors: [color],
//       strokeColors: [strokeColor],
//       strokeWidth: 3,
//     },
//   };
// }

// function getCSSVariableValue(variableName: string) {
//   let hex = getComputedStyle(document.documentElement).getPropertyValue(variableName)
//   if (hex && hex.length > 0) {
//     hex = hex.trim()
//   }

//   return hex
// }

