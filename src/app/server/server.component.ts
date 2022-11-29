import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  isDisplaying = false;
  listOfClicks = []

  HandleButtonClicked()
  {
    this.isDisplaying = !this.isDisplaying;
    //each time teh button is clicked, will add a number ot he array
    //(number will match the index in the array it was placed at, plus 1)
    this.listOfClicks.push(this.listOfClicks.length + 1)
  }

  getColor(clickValue: number)
  {
    return clickValue >= 5 ? "blue" : "transparent"
  }
}
