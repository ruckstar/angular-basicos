import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})


export class ListadoComponent {

  public heroes : string[] = ["Don Ramon", "Doña Florinda", "Kiko", "El chavo del 8", "ñoño"];
  public heroesBorrados: string[] = [];

  public borrarHeroe() : void {

    console.log("borrando...");
    let heroe: string =  this.heroes.shift() || "";
    console.log(heroe);
    this.heroesBorrados.push(heroe);
    console.log("elemento borrado exitosamente."); 

    
  }


}
