import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Distribution {
  _id: string,
  name: string;
  email: string;
  company: string;
  is_deleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DistributionService {
  data: Distribution[] = [
    {
      _id: '1',
      name: "Said",
      email: "said@revartis.ch",
      company: "Revartis",
      is_deleted: false,
    },
    {
      _id: '2',
      name: "Sylvain",
      email: "sylvain@revartis.ch",
      company: "Revartis",
      is_deleted: false,
    },
    {
      _id: '3',
      name: "Amine",
      email: "amine@revartis.ch",
      company: "Revartis",
      is_deleted: false,
    },
  ];
  private apiUrl = `${environment.apiUrl}/distribution`;


  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Distribution[]> {
    return of(this.data);
  }

  getById(distribution_id: string): Observable<Distribution> {
    const distribution: any = this.data.find((item: Distribution) => item._id === distribution_id);
    if (distribution) {
      return of(distribution);
    }
    return of();
  }

  create(website: Distribution): Observable<Distribution> {
    return this.http.post<Distribution>(`${environment.apiUrl}`, website);
  }

  update(website: Distribution): Observable<Distribution> {
    const url = `${this.apiUrl}/${website._id}`;
    return this.http.put<Distribution>(url, website);
  }
}
