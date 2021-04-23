import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name:string;
  email:string;
  message:string;
  constructor() {
    this.name = "";
    this.email = "";
    this.message = "";
   }

  ngOnInit(): void {

  }
  onSubmit(f: NgForm): void {
    let message = "";
    if (this.name == ""){
      message+="Name Invalid"
    }
    if (this.email == ""){
      message+=" Email Invalid"
    }
    if (this.message == ""){
      message+=" Message Invalid"
    }

    alert(message);

  }
}
