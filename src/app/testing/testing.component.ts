import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  newServer = false;
  createNewServer ='not yet created';
  serverName='apple'

  constructor() { 
    setTimeout(() =>{
      this.newServer = true;
    },2000);
  }

  ngOnInit() {}
    onCreateServer(){
      this.createNewServer='server created';
    }
    onUpdateServer(event: Event)
    {
      this.serverName=(<HTMLInputElement>event.target).value;
    }
  }


