import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-server',
    templateUrl: './server.component.html'
  }
)
export class ServerComponent {
 Id: Number = 10;
 Status: String = 'online';

 constructor() {
   this.Status = Math.random() > 0.5 ? 'online' : 'offline';
 }

  getStatus() {
    return this.Status ;
  }
}

