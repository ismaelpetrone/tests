import { AfterViewInit, OnInit, Component } from '@angular/core';
import { DownloadUrlService } from '../shared/downloadurl/downloadurl.service';
import { Brastlewark } from "./brastlewark.model";
import { Filter } from './filter.model';

@Component({
    selector: 'font-asssessment',
    templateUrl: './font-assessment.component.html',
    styleUrls: ['../app.component.css']
  })
export class FontAssessmentComponent implements OnInit, AfterViewInit {
    private data: Brastlewark[] = [];

    public displayData: Brastlewark[] = [];
    public filters: Filter[] = [];
    public showFilters: boolean = false;
    public filterText?: string = undefined;

    constructor(private downloadService: DownloadUrlService) { }
    
    ngOnInit(): void {
        this._createFilters();
    }
  
    ngAfterViewInit(): void {
        this.downloadService.getJSON('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').
            subscribe(resp => {
                this.data = resp.Brastlewark;
                this._insertToDisplayData();
          });
    }

    private startFilter(): void {
        if (this.showFilters) {            
            if (this._isAnyFilterActive()) {
                if (this.filterText && this.filterText.length) {
                    this.displayData = [];
                    this.data.forEach((profile: Brastlewark) => {
                        const find_profile = this._searchParams(profile);
                        if (find_profile) {
                            this.displayData.push(profile);
                        }
                    });
                }
            }
        }
    }

    public do_filter(): void {
        if (!this.filterText || !this.filterText.length || !this._isAnyFilterActive()) {
            this._insertToDisplayData();
        } else {
            this.startFilter();
        }
    }

    public do_filter_keyup(): void {
        if (!this.filterText || !this.filterText.length) {
            this._insertToDisplayData();
        } else {
            this.startFilter();
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

    private _insertToDisplayData(): void {
        if (this.data.length === this.displayData.length) return;
        this.displayData = this.data;
    }

    private _searchParams(profile: Brastlewark): Brastlewark {        
        for (let i = 0; i < this.filters.length; i++) {
            const filter = this.filters[i] as Filter;
            if (filter.selected) {
                let compare = undefined;
                switch (filter.id) {
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
                if (compare && this._findValues(compare,  this.filterText)) {
                    return profile;
                }
            }
        }
        return null;
    }

    private _findValues(content: any, textToFind: any): boolean {
        const splitted_search = textToFind.replace(' ', '').split(',');
        const splitted_content = content.split(',');
        for (let i = 0; i < splitted_content.length; i++) {
            if (this._findValues2(splitted_content[i].toString(), splitted_search)) {
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

    private _isAnyFilterActive(): boolean {
        for (let i = 0; i < this.filters.length; i++) {
            const filter = this.filters[i] as Filter;
            if (filter.selected) {
                return true;
            }
        }
        return false;
    }

    private _getNumberOfFilters(): number {
        let c = 0;
        for (let i = 0; i < this.filters.length; i++) {
            const filter = this.filters[i] as Filter;
            if (filter.selected) {
                c++
            }
        }
        return c;
}

}
