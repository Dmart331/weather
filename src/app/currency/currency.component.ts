import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styles: []
})
export class CurrencyComponent implements OnInit {

	id_currency: string = "";
	my_result: any;

  constructor(private _sharedService : SharedService) { }

  ngOnInit() {
  }

  callCurrencyService(){
  	this._sharedService.findMovie(this.id_currency)
  		.subscribe( listResult => {
  			        this.my_result =  JSON.stringify(listResult);
  		},
  		error => {
  			console.log("Error");
  			console.log("See, told ya");
  		}
  		);
  }
}
