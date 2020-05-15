import { Component, OnInit ,Input} from '@angular/core';
import { CustomerService } from '../../../services/customer.service'


@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {
  customers =[];
  selectedLevel;
  task = '';
  tasks = {
    description:'',
    customer_id:undefined
  }

  constructor(private customersService:CustomerService) { 
    this.getCustomers();
  }

  ngOnInit(): void {
  }
  
  getCustomers(){
    this.customersService.getCustomers().subscribe(apiRes => {

      if(apiRes.success)
        this.customers = apiRes.data;
    });
  }

  selected(){
    console.log(this.selectedLevel)
  }

  saveContact(){
    if(this.task != '') {
      this.tasks.description = this.task;
      this.tasks.customer_id = this.selectedLevel;
      this.customersService.addTask(this.tasks).subscribe(apiRes => {
        if(apiRes.success){
          this.tasks = {
            description:'',
            customer_id:undefined
          }
        }
      })
    }
  }
}
