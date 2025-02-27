import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  listFavorite: Residence[] = [];
  listResidence!:Residence[];
  item: string = '';
  constructor(private rs:ResidenceService){}
  showLocation(address: string) {
    if (address === 'inconnu') {
      return alert("l'adresse est inconnu");
    } else {
      return alert('l adresse est ' + address);
    }
  }

  addFavorite(residence: Residence) {
    if (!this.listFavorite.includes(residence)) {
      this.listFavorite.push(residence);
    }
  }

  filterByAdress(): Residence[] {
    this.rs.getResidenceList().subscribe(res=>this.listResidence=res)
    return this.listResidence.filter((res) =>
      res.address.toLowerCase().includes(this.item.toLowerCase())
    );
   
  }
}
