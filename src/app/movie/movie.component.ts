import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  check:any=false
  movieData:any=""
  search=this.fb.group({
   movie:['']
  })

  constructor(private ds:ServiceService, private fb:FormBuilder){

    
  }

  ngOnInit(): void {
    this.check=false
  }

  movie(){
    var movie=this.search.value.movie
    console.log(movie);

    this.ds.movieSearch(movie).subscribe(data=>{
      this.movieData=data
      this.check=true
    })
    
  }
}
