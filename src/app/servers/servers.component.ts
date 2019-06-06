import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
   styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allow = false;
  create = 'no server was created';
  cr = false;
  // serverName = '';
  serverName = 'Test';
  constructor() {
    setTimeout(() => {
      this.allow = true;
    }, 4000);
  }

  ngOnInit() {
  }
  onCreate() {
    this.cr = true;
    this.create = 'server created ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}

