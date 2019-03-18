import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  ASPresult: any;
  PHPresult: any;
  Webresult: any;
  getASPInfo() {
    this.ds.aspInfo().subscribe( response => { this.ASPresult = response } );
  }

  getPHPinfo() {
    this.ds.phpInfo().subscribe( response => { this.PHPresult = response } );
  }

  getWebInfo() {
    this.ds.webInfo().subscribe( response => { this.Webresult = response } );
  }

}
