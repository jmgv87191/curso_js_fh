import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { restarAction, sumarAction } from '../../store/contador.action';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  total:number = 0

  constructor   ( private store:Store<{ contador: number }> ){

    this.store.select('contador').subscribe((data)=>{
      this.total = data
    })

  }

  sumar(){

    this.store.dispatch( sumarAction( {add:1}) )

  }

  restar(){
    this.store.dispatch(restarAction())
  }

}
