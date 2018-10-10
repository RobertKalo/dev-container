import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient: HttpClient) { }

  getHelloFromServiceA(): Observable<string> {
    return this.httpClient.get<string>('/api/service-java8-a/hello');
  }

  getHelloFromServiceB(): Observable<string> {
    return this.httpClient.get<string>('/api/service-java8-b/hello');
  }

  getHelloFromServiceC(): Observable<string> {
    return this.httpClient.get<string>('/api-node/hello');
  }

}
