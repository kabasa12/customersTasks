import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  api_endpoint = 'http://localhost:4000/';

  customers =[];
  tasks = [];

  constructor(private http:HttpClient) { }

  getCustomers():Observable<any> {
    return this.http.get(this.api_endpoint  + 'customers');
  }

  getTasks():Observable<any> {
    return this.http.get(this.api_endpoint  + 'tasks')
  }

  addTask( task ):Observable<any> {
    return this.http.post(this.api_endpoint + 'tasks', {task});
  }
}
