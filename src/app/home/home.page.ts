import { Component, ViewChild, ElementRef } from '@angular/core';
import { Map } from "mapbox-gl";
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: mapboxgl.Map;

  constructor() {
      Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set("pk.eyJ1IjoiYWxlbmRvIiwiYSI6ImNrM2ViaXVyZjFlNmszYnFqMHB0bmFmbGcifQ.JHTD6PbUodS4XngjM53FUQ");
  }

  private loadMap() {
      this.map = new Map({
          container: 'map', // container id
          style: 'mapbox://styles/mapbox/outdoors-v10', // stylesheet location
          center: [12.57446, 41.84959], // starting position [lng, lat]
          zoom: 9 // starting zoom
      });
      this.map.resize();
      this.map.addControl(new mapboxgl.NavigationControl());
  }

  ngOnInit() {
      this.loadMap();
  }
}
