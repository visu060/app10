import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h2
  //   {
  //     color : blue;
  //   }
  // `]
  
})
export class AppComponent {
  // userName = '';
  showSecret= false;
  log=[];

  onToggleDetails()
  {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length +1);
    this.log.push(new Date());
  }
 
}
