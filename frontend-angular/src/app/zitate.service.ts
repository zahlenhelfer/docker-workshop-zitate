import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ZitateService {
    constructor(private http: HttpClient) { }

    getZitat() {
        return this.http.get<object>(environment.backend_url + 'zitat');
    }
}
