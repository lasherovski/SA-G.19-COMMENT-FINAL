import{Component, OnInit}from '@angular/core';
import {RestaService}from '../resta.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {

  restas:Array<any>;
  members: Array<any>;
  

  constructor(private restaService: RestaService) { }

  ngOnInit() {
    this.restaService.getAllRestaurant().subscribe(data => {
    this.restas = data;
    })
  }

}
