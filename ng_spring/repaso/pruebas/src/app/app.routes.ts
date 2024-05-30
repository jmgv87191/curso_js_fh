import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartAppComponent } from './components/cart-app/cart-app.component';

export const routes: Routes = [
    {
        path: 'header',
        component: HeaderComponent
    },
    {
        path:'',
        component: CartAppComponent
    },
    {
        path:'**',pathMatch:'full',redirectTo:''
    }

];
