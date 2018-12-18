import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DownloadUrlService {

    constructor(private http: HttpClient) { }

    public getJSON(dataurl: string): Observable<any> {
        return this.http.get(dataurl);
    }

}