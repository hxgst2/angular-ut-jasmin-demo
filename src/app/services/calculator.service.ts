import {Injectable} from '@angular/core';
// import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {


  constructor() { }

  // constructor(private logger: LoggerService) {
  // }

  // tslint:disable-next-line: typedef
  add(n1: number, n2: number) {
    return n1 + n2;
  }

  // tslint:disable-next-line: typedef
  subtract(n1: number, n2: number) {
    return n1 - n2;
  }


}

