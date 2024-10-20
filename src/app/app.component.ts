import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlumnoComponent, ProfesorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto en Angular 18';
}
