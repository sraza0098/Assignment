import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from '../../services/data.service'

export interface PeriodicElement {
  name: string;
  transferAmount: number;
  transferCurrency: string;
  reference: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.scss']
})


export class ViewTransactionComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'transferAmount', 'transferCurrency', 'reference'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  customerBlueprint: PeriodicElement = {name:'', transferAmount:1, transferCurrency:'', reference:''};
  constructor(private _dataService: DataService) { 
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    let url = "assets/json/customer.json";
    this._dataService.getData(url).subscribe(function(res){
      res.forEach(function(element){
        this.customerBlueprint.name = element.customerName;
        this.customerBlueprint.transferAmount = element.transferAmount;
        this.customerBlueprint.transferCurrency = element.transferCurrency;
        this.customerBlueprint.reference = element.reference;
        ELEMENT_DATA.push(this.customerBlueprint);
      }.bind(this));
      
      this.dataSource.paginator = this.paginator;
    }.bind(this));

    
  }

}
