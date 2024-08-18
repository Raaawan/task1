import { Component } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {
isCliciked:boolean=false;
imageSrc:string=""
open(mainImage:string){
  this.isCliciked=true;
  this.imageSrc=mainImage;
}
close(){
  this.isCliciked=false;
}
}