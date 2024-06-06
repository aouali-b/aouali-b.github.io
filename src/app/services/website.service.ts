import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface Website {
  _id: string,
  logo?: string;
  title: string;
  url: string;
  frequency?:string;
  last_update: string;
  is_changed: boolean;
  is_deleted: boolean;
  status: string;
  total?: string;
  new?: string;
  modified?: string;
  totalArticles?: number;
  articlesLastScrape?: number;
}

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  private apiUrl = `${environment.apiUrl}/websites`;


  constructor(private http: HttpClient) { }
  getAll(): Observable<Website[]> {
    console.log('apiUrl:', this.apiUrl);

    return this.http.get<any>(this.apiUrl);
  }
  getById(website_id: string): Observable<Website> {
    return this.http.get<Website>(`${this.apiUrl}/${website_id}`);
  }

  create(website: Website): Observable<Website> {
    return this.http.post<Website>(`${environment.apiUrl}/add-website`, website);
  }

  update(website: Website): Observable<Website> {
    const url = `${this.apiUrl}/${website._id}`;
    return this.http.put<Website>(url, website);
  }

  delete(website_id: string): Observable<Website> {
    return this.http.delete<Website>(`${environment.apiUrl}/delete-website/${website_id}`);
  }
  
}
