import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

export const routes: Routes = [
    
    { path: 'teste', component: FirstComponentComponent },
    { path: 'list', component: ListRenderComponent }
];
