import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.css']
})
export class DesafioComponent implements OnInit {

  public staff = [
    {
      name: 'Ezequiel',
      role: 'student'
    },
    {
      name: 'Juan',
      role: 'student'
    },
    {
      name: 'Pepe',
      role: 'tutor'
    },
    {
      name: 'Juanito',
      role: 'professor'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
