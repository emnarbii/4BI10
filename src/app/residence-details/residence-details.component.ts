import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/models/Residence';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  id:number|undefined;
  res:Residence|undefined;
  
constructor(private act:ActivatedRoute, private rs:ResidenceService){}

ngOnInit(){
  this.id=this.act.snapshot.params['id'];
  this.act.paramMap.subscribe(param=>{this.id= Number (param.get('id'));
    // this.res=this.rs.getResidenceList().find(res=>res.id===this.id)
    console.log(this.id)
    this.rs.getResidenceByID(this.id).subscribe(residence=>this.res=residence)
    console.log(this.res)
  })
 
}
}
