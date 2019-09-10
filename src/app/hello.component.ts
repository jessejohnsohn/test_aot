import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{id}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  id = 0;

  constructor(route: ActivatedRoute) {
	  route.params.subscribe(params => this.id = params.id)
  }
}
