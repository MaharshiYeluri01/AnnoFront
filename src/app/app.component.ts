import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'anno-front'
  serving_url="http://127.0.0.1:5000/"
  selectedText=''
  sentences:any




  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(this.serving_url).subscribe(res=>{
      this.sentences=res["docs"]
      console.log('res',res)
    })
  }

  showSelectedText(oField) {
    
    if (window.getSelection) {
      let selected_string=window.getSelection().toString()
      if (selected_string.length>2){
        this.selectedText  += '<code>['+selected_string+']</code>'
      }
      
    } 
    
  }



}
