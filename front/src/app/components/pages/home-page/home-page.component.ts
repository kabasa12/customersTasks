import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  customers =[];
  constructor(private customersService:CustomerService) {
    this.getCustomers();
   }

  ngOnInit(): void {
  }

  getCustomers(){
    this.customersService.getCustomers().subscribe(apiRes => {
      if(apiRes.success){
         
        this.customers = apiRes.data
      }
    })
  }
}
