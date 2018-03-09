import { Component } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';

@Component({
    selector: 'app-receta',
    templateUrl: './receta.component.html'

})
export class RecetaComponent {

   constructor( public _rs:RecetasService) { }

}
