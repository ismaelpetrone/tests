import { AfterViewInit, OnInit, Component, Input } from '@angular/core';
import { Path } from 'three';

@Component({
    selector: 'go-to',
    templateUrl: './goto.component.html',
    styleUrls: ['../../app.component.css']
  })
export class GoTo implements OnInit, AfterViewInit {

    @Input() path: string;

    ngOnInit(): void {        
    }
  
    ngAfterViewInit(): void {        
    }
}
