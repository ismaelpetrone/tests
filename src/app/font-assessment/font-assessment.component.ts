import { AfterViewInit, OnInit, Component } from '@angular/core';
import { DownloadUrlService } from '../shared/downloadurl/downloadurl.service';
import { Brastlewark } from './brastlewark.model';

@Component({
    selector: 'font-asssessment',
    templateUrl: './font-assessment.component.html',
    styleUrls: ['../app.component.css']
  })
export class FontAssessmentComponent implements OnInit, AfterViewInit {
    
    constructor(private downloadService: DownloadUrlService) { }
    public data: Brastlewark[];

    ngOnInit(): void {
        
    }
  
    ngAfterViewInit(): void {
        this.downloadService.getJSON('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').
            subscribe(resp => {
                this.data = resp.Brastlewark;
          });
    }

}
