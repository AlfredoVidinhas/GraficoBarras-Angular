import { Component } from '@angular/core';
import {GraficoModel} from "./Model/grafico.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bar chart with Angular';

  public Animals: Array<GraficoModel> = [
    {Value: 350, Color:'#498B94', Size:'', Legend:'Monkeys'},
    {Value: 2000, Color:'#F8C622', Size:'', Legend:'Giraffes'},
    {Value: 1000, Color:'#747474', Size:'', Legend:'Lions'},
    {Value: 500, Color:'#EC972D', Size:'', Legend:'Tigers'},
  ];
}
