import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FileModel } from "../models/filemodel";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()

export class ServicePostFiles {
    constructor(
        private _http: HttpClient
    ) {}

    async postFile(filemodel: FileModel): Promise<any> {
        let json = JSON.stringify(filemodel);
        let header = new HttpHeaders().set("content-type", "application/json");
        let request = "api/testingfiles";
        let url = environment.urlApiFiles + request;

        return firstValueFrom(
            this._http.post(url, json, { headers: header })
        )
    }
}