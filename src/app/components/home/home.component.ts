import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from 'src/app/_Services/portfolioService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homePortfolioService: PortfolioServiceService) { }



  ngOnInit(): void {
   this.homePortfolioService.getPortfolioData().subscribe((data: any)=>{console.log(data);
   });
  }

}
