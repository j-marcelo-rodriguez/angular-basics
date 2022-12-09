import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['SpiderMan', 'IronMan', 'Thor', 'Hawke', 'Widow', 'Thanos'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('Borrando..');
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
  }
}
