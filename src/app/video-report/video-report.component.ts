import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-report',
  templateUrl: './video-report.component.html',
  styleUrls: ['./video-report.component.sass']
})
export class VideoReportComponent implements OnInit {

  @Input() firstError;
  @Input() secondError;
	storys = {
	  open: false,
		error : [
			{
			  id: 1,
        display: true,
        eye : "Камера 7",
				place : "Цех 11",
				video : "assets/video/l_05_persons_0_smoke_1_01.mp4",
				data : '10:48',
				tags : [
					{
						name : "Человек",
						color : "warn"
					},
					{
						name : "Лежит",
						color : "warn"
					},
					{
						name : "Средство защиты",
						color : ""
					}
				]
			}
		],
		warning : [
    {
      open: false,
      id: 2,
      display: true,
      eye : "Камера 13",
      place : "Цех 13",
      video : "assets/video/l_07_persons_0_01.mp4",
      data : '10:49',
      tags : [
        {
          name : "Задымление",
          color : "warn"
        },
        {
          name : "Степень 1",
          color : "accent"
        }
      ]
    }
		]
	};
	panelOpenState = false;

	constructor() { }

	ngOnInit() {
	}

}
