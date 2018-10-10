import { AppServiceService } from './app-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  serviceAResponse: string;
  serviceBResponse: string;
  serviceCResponse: string;

  constructor(private appService: AppServiceService) {}

  callServiceA() {
    this.appService.getHelloFromServiceA().subscribe(data => this.serviceAResponse = data);
  }

  callServiceB() {
    this.appService.getHelloFromServiceB().subscribe(data => this.serviceBResponse = data);
  }

  callServiceC() {
    this.appService.getHelloFromServiceC().subscribe(data => this.serviceCResponse = data);
  }

}
