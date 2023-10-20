import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }

  movieSearch(movie:any){
    return this.http.get(`https://www.omdbapi.com/?apikey=fa1c9c03&t=${movie}`)
  }
}
