import { Injectable } from '@angular/core';
import { Residence } from '../models/Residence';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  // listResidences: Residence[] = [
  //     {
  //       id: 1,
  //       name: 'El fel',
  //       address: 'Borj Cedria',
  //       image: '../../assets/images/R4.jpg',
  //       status: 'Disponible',
  //     },
  //     {
  //       id: 2,
  //       name: 'El yasmine',
  //       address: 'Ezzahra',
  //       image: '../../assets/images/R4.jpg',
  //       status: 'Disponible',
  //     },
  //     {
  //       id: 3,
  //       name: 'El Arij',
  //       address: 'Rades',
  //       image: '../../assets/images/R4.jpg',
  //       status: 'Vendu',
  //     },
  //     {
  //       id: 4,
  //       name: 'El Anber',
  //       address: 'inconnu',
  //       image: '../../assets/images/R4.jpg',
  //       status: 'En Construction',
  //     },
  //   ];
  

  constructor(private http:HttpClient) { }

  getResidenceList(){
    return this.http.get<Residence[]>('http://localhost:3000/residences');
  }


  getResidenceByID(id:number){
    return this.http.get<Residence>('http://localhost:3000/residences' + '/' + id)
  }


  addResidence(r:Residence){
    return this.http.post('http://localhost:3000/residences', r)

  }
  updateResidence(r:Residence, id:number){
    return this.http.put( 'http://localhost:3000/residences' + '/' + id, r)

  }
  deleteResidence(id:number){
    return this.http.delete('http://localhost:3000/residences'+ '/' + id)

  }
}
