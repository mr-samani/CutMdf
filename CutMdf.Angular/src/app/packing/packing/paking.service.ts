import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PackingService {
    constructor(
        private http: HttpClient
    ) {

    }


    public getData(params: any) {
        return this.http.get<any>('http://127.0.0.1:2145/api/packing', {
            params
        });
    }
}