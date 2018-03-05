
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RecetasComponent } from './components/recetas/recetas.component';


const APP_ROUTES: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'recetas', component: RecetasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'main' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
