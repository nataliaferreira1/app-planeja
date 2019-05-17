import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-planejamento',
  templateUrl: './novo-planejamento.page.html',
  styleUrls: ['./novo-planejamento.page.scss'],
})
export class NovoPlanejamentoPage implements OnInit {

  constructor(private nav:NavController)  { }

  ngOnInit() {
  }

  salvar(form) {
    const planoString = JSON.stringify(form.value)
    const faturamento = form.value.nome

    localStorage.setItem(faturamento, planoString)
    
    console.log(form.value)
    form.reset()

    this.nav.back()

  }
}
