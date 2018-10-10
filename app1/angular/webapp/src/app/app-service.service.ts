import { HelloResponse } from './HelloResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient: HttpClient) { }

  getHelloFromServiceA(): Observable<HelloResponse> {
    return this.httpClient.get<HelloResponse>('/api/service-java8-a/hello');
  }

  getHelloFromServiceB(): Observable<HelloResponse> {
    return this.httpClient.get<HelloResponse>('/api/service-java8-b/hello');
  }

  getHelloFromServiceC(): Observable<HelloResponse> {
    return this.httpClient.get<HelloResponse>('/api-node/hello');
  }

}
