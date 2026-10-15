import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { MePerdonas } from './pages/meperdonas/page/meperdonas.component';

export const routes: Routes = [

    {
        path: '',
        component: MePerdonas
    },
    {
        path: 'contador',
        component: CounterComponent
    }
];
