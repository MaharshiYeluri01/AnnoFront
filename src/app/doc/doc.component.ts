import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("intialized")
  }

  @Input() docData: any;

}
