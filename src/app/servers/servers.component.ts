import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //     <app-server></app-server>
  //     <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No Server was created!';
    serverName = 'TestServer';
    serverCreated = false;
    servers =['Testserver' , 'Testserver2']


  constructor() { 
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated =true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server is created and name is ' + this.serverName;
  }
  onUpdateServername(event: Event){
   this.serverName =(<HTMLInputElement>event.target).value;
  }

}
