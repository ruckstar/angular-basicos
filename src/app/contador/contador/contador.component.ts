import { Component } from '@angular/core';


@Component({
    selector:"app-contador",
    template:`
        <div>La base es: {{ base }}</div>
        <br>

        <button (click)="acumular( -base );">-{{ base }}</button>
        <span> {{ this.contador }} </span>
        <button (click)="acumular( base )">+{{ base }}</button>
    `
})
export class ContadorComponent{
    public base    : number = 5;
    public contador: number = 0;

    public acumular(valor : number) : void {
        this.contador += valor;
    }
}