import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FilterModel} from '../models/filter.model';

@Component({
  selector: 'filter',
  templateUrl: 'app/filter/templates/filter.html',
  styleUrls: ['app/css/styles.css']
})

export class FilterComponent {

  @Input() model: FilterModel;
  @Output() doFilter = new EventEmitter();

  constructor() {
  }

  getFilteredSelectionList( ) {
    this.doFilter.emit({});
  }

  typeSelected() {
    this.getFilteredSelectionList(); 
  }
}



