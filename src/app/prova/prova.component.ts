import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../servizi/firebase.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})

export class ProvaComponent  implements OnInit{

  constructor(private firebase:FirebaseService) { }

  nome="";
  cognome="";
  persone:any;
  isDisabled = false;
  immagine1="https://th.bing.com/th/id/OIP.cOzslLORZD4B4hzFCM4ujQHaFT?rs=1&pid=ImgDetMain"
cane=[
  
  {
    nome: 'Bau',
    razza: 'Pastore tedesco',
    descrizione: 'Cane molto grande e peloso'
  
  }
]


salvataggio(nome:string, cognome:string){
  console.log('Il metodo salvataggio è stato chiamato');
  this.firebase.insertPersona('https://5aiandreamonico.barsanti.edu.it/php_api2//api/product/create.php', nome, cognome).subscribe(data => {
    console.log(data);
     this.isDisabled = false; // riabilita il bottone una volta che la richiesta è completata
  });
  
}
ngOnInit(): void {

// this.firebase.insertPersona('https://5aiandreamonico.barsanti.edu.it/php_api2//api/product/create.php',
//  'andrea','cicciogamer' ).subscribe(data => {
//    console.log(data);
//  });

// this.firebase.getPersona('https://5aiandreamonico.barsanti.edu.it/php_api2//api/product/read.php').subscribe((data: any) => {
//       this.persone = Object.keys(data).map((key) => { return data[key] });
//       console.log(this.persone);
//     });
 
}


nomeRicerca='';
cognomeRicerca='';

ricerca(nome: string, cognome: string) {
  this.firebase.getPersona('https://5aiandreamonico.barsanti.edu.it/php_api2//api/product/read.php', nome, cognome).subscribe(data => {
    console.log(data);
  });
}

}
