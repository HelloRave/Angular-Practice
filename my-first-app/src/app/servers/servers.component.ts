import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: `[app-servers]`,
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  userName = 'hello';
  serverCreated = false; 
  servers = ['Testserver', 'Testserver 2']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true; 
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true; 
    this.servers.push(this.serverName); 
    this.serverCreationStatus = 'Server create; Name is' + this.serverName
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value; 
  }

  resetUserName(){
    this.userName = ''
  }
}
