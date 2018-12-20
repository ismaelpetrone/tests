import { AfterViewInit, OnInit, Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DownloadUrlService } from '../shared/downloadurl/downloadurl.service';
import { Brastlewark } from "./brastlewark.model";
import { Filter, ActiveFilter } from './filter.model';

@Component({
    selector: 'font-asssessment',
    templateUrl: './font-assessment.component.html',
    styleUrls: ['../app.component.css']
  })
export class FontAssessmentComponent implements OnInit, AfterViewInit {

    public data: Brastlewark[] = [];
    public displaysize: number;
    @ViewChild("myButton") table: ElementRef;

    public selectedFilter: string = '1';    
    public filters: Filter[] = [];
    public activeFilters: ActiveFilter[] = [];
    public showFilters: boolean = false;
    public filterText?: string = undefined;

    constructor(
        private downloadService: DownloadUrlService
        ) { }
    
    ngOnInit(): void {
        this._createFilters();
    }
  
    ngAfterViewInit(): void {
        this.downloadService.getJSON('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').
            subscribe(resp => {
                this._startData(resp.Brastlewark);
          });
    }

    @HostListener('window:scroll', ['$event'])
      onScroll(event): void {
        try {            
            if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 5)) {                
                let done = 0;
                let reach = 10;
                for (let i = 0; i < this.data.length; i++) {
                    if (!this.data[i].scrollDisplay && this.data[i].display) {
                        this.data[i].scrollDisplay = true; 
                        done++;
                    }                                            
                    if (done >= reach) {
                        break;
                    }
                }
            }
        } catch (error) {

        }
      }

    private _assignData(gnomes: Brastlewark[]): void {
        for (let i = 0; i < 10; i++) {
            gnomes[i].display = true;
            gnomes[i].scrollDisplay = true;
        }
        this.data = gnomes;
        this.displaysize = gnomes.length;
    }

    private _startData(gnomes: Brastlewark[]): void {
        for (let i = 0; i < gnomes.length; i++) {
            gnomes[i].display = true;
            if (i < 11) gnomes[i].scrollDisplay = true;
        }
        this.data = gnomes;
        this.displaysize = gnomes.length;
    }

    private startFilter(): void {
        this.data.forEach((profile: Brastlewark) => {
            const find_profile = this._searchParams(profile);
            if (find_profile) {
                if (profile.display != true) {
                    this.displaysize += 1;
                }
                profile.display = true;
                profile.scrollDisplay = true;       
            } else {
                if (profile.display != false) {
                    this.displaysize -= 1;
                }
                profile.display = false;
                profile.scrollDisplay = false;
            }
        });        
    }

    public do_filter(): void {
        if (this.filterText && this.filterText.length) {
            this._createActualFilter();
            this.startFilter();
        }
    }

    private _random(min: number, max: number) {
        return Math.round(Math.random() * (max - min + 1)) + min;         
    }

    private _checkRepeteadFilterId(id: number): number {
        const filter = this.activeFilters.find(x => x.id === id);
        if (filter) {
            return this._checkRepeteadFilterId(this._random(0, 100));
        } else {
            return id;
        }
    }

    private _createActualFilter(): void {
        const filter = this.filters.find(x => x.id === parseInt(this.selectedFilter, 10));
        const newId = this._checkRepeteadFilterId(this._random(0, 100));
        this.activeFilters.push(new ActiveFilter(newId, filter, this.filterText));
    }

    public deleteActualFilter(actualFilterId: number): void {
        const filter = this.activeFilters.find(x => x.id === actualFilterId);
        this.activeFilters.splice(this.activeFilters.indexOf(filter), 1);
        if (this.activeFilters && this.activeFilters.length) {
            this.startFilter();
        } else {
            this._assignData(this.data);
        }
    }

    public do_filter_keyup(event: KeyboardEvent): void {
        if (event.key === "Enter") {
            if (this.filterText && this.filterText.length) {
                this._createActualFilter();
                this.startFilter();
            }
        }        
    }

    private _createFilters(): void {
        this.filters.push(new Filter(1, 'Name'));
        this.filters.push(new Filter(2, 'Age'));
        this.filters.push(new Filter(3, 'Height'));
        this.filters.push(new Filter(4, 'Weight'));
        this.filters.push(new Filter(5, 'Hair color'));
        this.filters.push(new Filter(6, 'Profession'));
        this.filters.push(new Filter(7, 'Friends'));
    }

    private _searchParams(profile: Brastlewark): boolean {
        let successedSearchs = 0;          
        for (let i = 0; i < this.activeFilters.length; i++) {
            const filter = this.activeFilters[i] as ActiveFilter;
            let compare = undefined;
            switch (filter.filter.id) {
                case 1:
                    compare = profile.name;
                break;
                case 2:
                    compare = profile.age.toString();
                break;
                case 3:
                    compare = profile.height.toString();
                break;
                case 3:
                    compare = profile.weight.toString();
                break;
                case 5:
                    compare = profile.hair_color;
                break;
                case 6:
                    compare = profile.professions.toString();
                break;
                case 7:
                    compare = profile.friends.toString();
                break;
            }
            if (compare
                && this._findValues(
                                compare.replace(' ', '').split(','), 
                                filter.textoToSearch.replace(' ', '').split(',')
                                )
                ) {
                successedSearchs +=1;
            }            
        }
        if (successedSearchs >= this.activeFilters.length) {
            return true;
        }
        return false;        
    }

    private _findValues(content: string[], textToFind: string[]): boolean {
        for (let i = 0; i < content.length; i++) {
            if (this._findValues2(content[i].toString(), textToFind)) {
                return true;
            }
        }
        return false;
    }

    private _findValues2(valueField: String, splitted_search: String[]): boolean {
        for (let i = 0; i < splitted_search.length; i++) {
            if (valueField.toLowerCase().includes(splitted_search[i].toString().toLowerCase())) {
                return true;
            }
        }
        return false;
    }
}
