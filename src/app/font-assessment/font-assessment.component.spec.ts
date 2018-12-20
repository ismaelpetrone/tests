// package: npm install ngentest -g
// command: ngentest font-assessment.component.ts > font-assessment.component.test.ts


// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import {Component, Directive} from '@angular/core';
import {FontAssessmentComponent} from './font-assessment.component';
import {DownloadUrlService} from '../shared/downloadurl/downloadurl.service';

@Injectable()
class MockDownloadUrlService { }
      
describe('FontAssessmentComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FontAssessmentComponent
      ],
      providers: [
        {provide: DownloadUrlService, useClass: MockDownloadUrlService},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(FontAssessmentComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create a component', async () => {
    expect(component).toBeTruthy();
  });
  
    
  it('should run #ngOnInit()', async () => {
    // component.ngOnInit();
  });
        
  it('should run #ngAfterViewInit()', async () => {
    // component.ngAfterViewInit();
  });
        
  it('should run #onScroll()', async () => {
    // component.onScroll(event);
  });
        
  it('should run #_assignData()', async () => {
    // component._assignData(gnomes);
  });
        
  it('should run #_startData()', async () => {
    // component._startData(gnomes);
  });
        
  it('should run #startFilter()', async () => {
    // component.startFilter();
  });
        
  it('should run #do_filter()', async () => {
    // component.do_filter();
  });
        
  it('should run #_random()', async () => {
    // const result = component._random(min, max);
  });
        
  it('should run #_checkRepeteadFilterId()', async () => {
    // const result = component._checkRepeteadFilterId(id);
  });
        
  it('should run #_createActualFilter()', async () => {
    // component._createActualFilter();
  });
        
  it('should run #deleteActualFilter()', async () => {
    // component.deleteActualFilter(actualFilterId);
  });
        
  it('should run #do_filter_keyup()', async () => {
    // component.do_filter_keyup(event);
  });
        
  it('should run #_createFilters()', async () => {
    // component._createFilters();
  });
        
  it('should run #_searchParams()', async () => {
    // const result = component._searchParams(profile);
  });
        
  it('should run #_findValues()', async () => {
    // const result = component._findValues(content, textToFind);
  });
        
  it('should run #_findValues2()', async () => {
    // const result = component._findValues2(valueField, splitted_search);
  });
        
});
