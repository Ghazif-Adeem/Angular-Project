import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  aspInfo() {
    return this.http.get("http://www.mocky.io/v2/5c7b727b2f00002c00e59ebb");
  }

  phpInfo() {
    return this.http.get("http://www.mocky.io/v2/5c7b73692f00005700e59ebd");
  }

  webInfo() {
    return this.http.get("http://www.mocky.io/v2/5c7b74322f00004c00e59ebe");
  }

  aspAssignments() {
    return this.http.get("http://www.mocky.io/v2/5c7bb9a62f0000e113e59f66");
  }

  phpAssignments() {
    return this.http.get("http://www.mocky.io/v2/5c7bba612f00001615e59f69");
  }

  angularAssignments() {
    return this.http.get("http://www.mocky.io/v2/5c7bc0382f00001615e59f74");
  }

}
