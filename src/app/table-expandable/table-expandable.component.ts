import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {PeriodicElementData} from "../model/periodicelementdata.model";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {PeriodicelementcolumntitleEnum} from "../application/periodicelementcolumntitle.enum";

@Component({
  selector: 'app-table-expandable',
  templateUrl: './table-expandable.component.html',
  styleUrls: ['./table-expandable.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableExpandableComponent implements OnInit {

  periodicElementData!: PeriodicElementData[];
  dataSource: PeriodicElementData[] = [];

  constructor(private dataService: DataService) {
  }

  async ngOnInit() {
    this.dataService.getPeriodicElements().subscribe((data) => {
      this.periodicElementData = data;
      this.dataSource = this.periodicElementData
    })
  }

  columnsToDisplay = [PeriodicelementcolumntitleEnum.name,
    PeriodicelementcolumntitleEnum.weight,
    PeriodicelementcolumntitleEnum.symbol,
    PeriodicelementcolumntitleEnum.position];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, PeriodicelementcolumntitleEnum.expand];
  expandedElement!: PeriodicElementData | null;
}

