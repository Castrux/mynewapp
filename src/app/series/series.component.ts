import { Component, OnInit } from '@angular/core';
import { Series } from './Series';
import { SeriesService } from './serieService';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {


  Series: Array<Series> = [];
  promedioTemporadas = 0;

  constructor(private seriesService: SeriesService) { }


  getSeries() {
    this.seriesService.getSeries().subscribe(Series => {
      this.Series = Series;
      this.getSeasonsAverage(this.Series);
    })
  }

  getSeasonsAverage(series: Series[]): void {
    let seasonsAverage: number = 0;
    let sumCantSeasons: number = 0;
    let sumCantSeries: number = series.length;

    series.forEach((serie) => sumCantSeasons += serie.seasons);

    seasonsAverage = sumCantSeasons / sumCantSeries;

    this.promedioTemporadas = Number(seasonsAverage.toFixed(1));
  }

  ngOnInit() {
    this.getSeries();
  }

}
