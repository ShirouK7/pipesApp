import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  
  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Jorge'];
  clientesMapa = {
    '=0': 'no tenemos nigún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit () {
    this.primengConfig.ripple = true;
  }

  cambiarCliente() {
    if(this.genero === 'femenino'){
      this.nombre = 'Esteban';
      this.genero = 'masculino';
    }
    else {
      this.nombre = 'Susana';
      this.genero = 'femenino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Esteban',
    edad: 24,
    direccion: 'Puebla, Puebla'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  myObservable = interval(5000); // 0 1 2 3 4 5

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve ('Tenemos data de promesa');
    }, 3500)
  });

}
