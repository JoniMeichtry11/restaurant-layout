import { Component } from '@angular/core';
import { Schedule } from '@core//models/schedule';

@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.scss'
})
export class SchedulesComponent {
  schedules: Schedule[] = [
    {
      day: "Lunes",
      schedule: "8am - 2 am",
    },
    {
      day: "Martes",
      schedule: '8am - 2 am',
    },
    {
      day: "Miércoles",
      schedule: '8am - 2 am',
    },
    {
      day: "Jueves",
      schedule: '8am - 2 am',
    },
    {
      day: "Viernes",
      schedule: '8am - 2 am',
    },
    {
      day: "Sábado",
      schedule: '8am - 2 am',
    },
    {
      day: "Domingo",
      schedule: '8am - 2 am',
    },
  ];
}
