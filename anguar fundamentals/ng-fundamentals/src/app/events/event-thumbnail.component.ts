  
import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template:`
  <div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <span>Date:</span>
    <span>{{event.date}}</span><br>
    <span>Time:</span>
    <span>{{event.time}}</span><br>
    <span>Price:{{event.price}}</span>
    <div>
    <span>Location:</span>
    <span>{{event.location.address}}</span>
    
    <span class = "pad-left">{{event.location.city}}, {{event.location.country}}</span>
    </div>

  </div>`,
  styles:[
      `.pad-left {margin-left:10px;}`,
      `.well div {color:red;}`
  ]
    
  })
  export class EventThumbnailComponent {
    @Input() event: any;
 
   
  }