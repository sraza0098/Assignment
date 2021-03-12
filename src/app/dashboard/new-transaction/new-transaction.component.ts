import { Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import {Customer} from 'src/app/model/customer'

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent implements OnInit, DoCheck, OnChanges {

  newTransactionForm:FormGroup;
  errorMsg:boolean = false;
  customerList: Customer[] = [];

  @ViewChild('reference') referenceNumber: ElementRef;

  constructor(private formBuilder: FormBuilder, private _dataService: DataService) { 
    let url = "assets/json/customer.json";
    this._dataService.getData(url).subscribe((res:Customer[]) =>{
      this.customerList = res;
      // console.log(this.customerList);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngDoCheck(): void {
    // console.log(this.referenceNumber.nativeElement);
  }

  ngOnInit(): void {
    this.newTransactionForm = this.formBuilder.group({
      reference: ['', Validators.compose([
        Validators.required
      ]),],
      customerNumber: ['', Validators.compose([
        Validators.required,

      ]),
      ],
      customerName: ['', Validators.compose([
        Validators.required,

      ]),
      ],
      customerAddress: ['', Validators.compose([

      ]),
      ],
      customerPhoneNo: ['', Validators.compose([

      ]),
      ],
      transferAmount: ['', Validators.compose([

      ]),
      ],
      transferCurrency: ['', Validators.compose([

      ]),
      ],
      beneficiaryAccountNumber: ['', Validators.compose([

      ]),
      ],
      paymentDetails: ['', Validators.compose([

      ]),
      ],
      creditDebitDetails: ['', Validators.compose([

      ]),
      ],
      region: ['', Validators.compose([

      ]),
      ],

    });
  }

  detectChanges(value){
    this.customerList.filter((x) => {
      if(x.reference === value.value){
        this.newTransactionForm.controls['customerName'].setValue(x.customerName);
        this.newTransactionForm.controls['customerAddress'].setValue(x.customerAddress);
        this.newTransactionForm.controls['customerNumber'].setValue(x.customerNumber);
        this.newTransactionForm.controls['customerPhoneNo'].setValue(x.customerPhoneNo);
        this.newTransactionForm.controls['beneficiaryAccountNumber'].setValue(x.beneficiaryAccountNumber);
        this.newTransactionForm.controls['creditDebitDetails'].setValue(x.creditDebitDetails);
        this.newTransactionForm.controls['paymentDetails'].setValue(x.paymentDetails);
        this.newTransactionForm.controls['reference'].setValue(x.reference);
        this.newTransactionForm.controls['region'].setValue(x.region);
        this.newTransactionForm.controls['transferAmount'].setValue(x.transferAmount);
        this.newTransactionForm.controls['transferCurrency'].setValue(x.transferCurrency);

      }
    })
    // console.log(value);
  }

  onSubmit(){
    if (this.newTransactionForm.valid) {
      
    }else{
      // alert("Please fill the form");
    }
  }

  clearForm(){
    this.newTransactionForm.reset();
  }

}
