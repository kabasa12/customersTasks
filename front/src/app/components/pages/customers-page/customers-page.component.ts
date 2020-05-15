import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service'

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {

 tasks =[];

  constructor(private customersService:CustomerService) {
    this.getTasks();
  }

  ngOnInit() {
  }

  getTasks(){
    this.customersService.getTasks().subscribe(apiRes => {
      if(apiRes.success){
         
        this.tasks = apiRes.data
      }
    })
  }
}
