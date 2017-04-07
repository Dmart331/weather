import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
	id_movie: string = "";
	mv_Title: string = "";
	mv_Rated: string = "";
	mv_Released: string = "";
	mv_Director: string = "";
	mv_Actors: string = "";
	mv_Plot: string = "";
	mv_Image: string = "";

  constructor(private _sharedService: SharedService ) { }

  ngOnInit() {
  }

  callMovieService(){
  	this._sharedService.findMovie(this.id_movie)
  		.subscribe( listResult => {
  				console.log("Movie: " , listResult);
  			        this.mv_Title = listResult["Title"];
                this.mv_Rated = listResult["Rated"];
 
                this.mv_Released = listResult["Released"];
                this.mv_Director = listResult["Director"];
                this.mv_Actors = listResult["Actors"];
                this.mv_Plot = listResult["Plot"];
                this.mv_Image = listResult["Poster"];
  		},
  		error => {
  			console.log("Error");
  			console.log("See, told ya");
  		}
  		);
  }
}
