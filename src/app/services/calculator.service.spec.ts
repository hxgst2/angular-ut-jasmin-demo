import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  // let logger: Logger;

  beforeEach(() => {
    // logger = new Logger();
    service = new CalculatorService();
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it\'s specification - let\'s add two numbers - Should (2 + 3) be 5', () => {
    const result = service.add(2, 3);
    expect(result).toBe(5);
  });

});

// https://jasmine.github.io/2.5/introduction

describe('CalculatorService[this is test suite]', () => {
  let loggerSpy: any;
  let calculator: CalculatorService;
  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue: loggerSpy}
      ]
    });
    calculator = TestBed.inject(CalculatorService);
  });

  it('it is specification - should add two numbers', () => {
    // pending('it\'s pending, not decided');
    // simple test check adding two number
    // const logger = new LoggerService();
    // spyOn(logger, 'log');
    // Jasmin - SpyOn function creates a new function, replaces...
    // ...original function and keeps track of how many times it's used.
    const result = calculator.add(2, 5);
    expect(result).toBe(7);
  });

  it('it is specification - should substract two numbers', () => {
    // const logger = jasmine.createSpyObj('LoggerService', ['log']);
    // const calculator = new CalculatorService(logger);
    const result = calculator.subtract(2, 5);
    expect(result).toBe(-3, 'Unexpected substraction result');
  });
});

