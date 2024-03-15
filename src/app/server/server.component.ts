import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

    serverId:number =10;
    serverName:String = 'Telnet Server';
    serverStatus:boolean = false;

    constructor(){

      this.swapStatus();
      
    }

    swapStatus(){
      setInterval( () => {
        console.log(this.serverStatus);
        this.serverStatus = !this.serverStatus;
        return this.serverStatus;
      }, 10000 );
      
    }
    
    // showTextInput(event:Event){
    // console.log(event);
    // this.serverName = (<HTMLInputElement>event.target).value;
    // }
    

}
