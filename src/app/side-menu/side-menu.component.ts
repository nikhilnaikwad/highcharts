import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  menuItems: any;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.dataService.getCharts().subscribe((result)=>{
      this.menuItems = result;
    });
  } 

  createChart(id:Number){
    switch (id) {
      case 1:
          this.router.navigate(['linechart']);
        break;
      case 2:
          this.router.navigate(['area']);
        break;
      case 3:
          this.router.navigate(['columnbar']);
        break;
      case 4:
          this.router.navigate(['pie']);
        break;
    
      default:
        this.router.navigate(['']);
        break;
    }
  }

}
