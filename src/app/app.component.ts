import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test2';


  persone=[
    {
      nome: 'Mario',
      cognome: 'Rossi',
      eta: 25,
      isOnline:true
    },
    {
      nome: 'Luca',
      cognome: 'Bianchi',
      eta: 30,
      isOnline:false
    },
    {
      nome: 'Paolo',
      cognome: 'Verdi',
      eta: 40,
      isOnline:true
    }

  ]

   onClick(e : any){
    console.log(e);
   }
   onInput(e : Event){
    console.log((<HTMLInputElement>e.target).value);
   }
}
