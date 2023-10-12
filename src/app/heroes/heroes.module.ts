import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //que cosas quiero que sean publicas/visibles fuera de este modulo: 
    exports: [
        ListadoComponent
    ],
    //aquí dentro van los modulos únicamente:
    imports: [
        CommonModule
    ]

}) 

export class HeroesModule{}