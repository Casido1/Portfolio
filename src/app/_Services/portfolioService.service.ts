import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

private base_url: string = "https://sq009pod2.herokuapp.com/api/user"

constructor(private http: HttpClient) {
  
 }
 getPortfolioData(){
  return this.http.get(this.base_url)
}
}