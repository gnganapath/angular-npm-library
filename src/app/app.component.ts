import { Component } from '@angular/core';
import { LoggerService } from "ng-logger";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-library';
  constructor(private loggerService : LoggerService){
    this.loggerService.log('Hello Angular Library service ')
  }
}
