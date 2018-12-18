import { AfterViewInit, OnInit, Component } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['../app.component.css']
  })
export class MainComponent implements OnInit, AfterViewInit {

    public applications: any[];

    ngOnInit(): void {
        this.applications = [
            { name: 'Editor', owner: 'Ismael Petrone', progress: '1', code: 1, route: '/editor' },
            { name: 'Font assessment', owner: 'Ismael Petrone', progress: '1', code: 2, route: '/font-assessment' }
        ];
    }
  
    ngAfterViewInit(): void {
        
    }
}
