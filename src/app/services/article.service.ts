import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Article {
  _id: string;
  websiteId: number;
  link:string;
  title: string;
  content: string;
  publish_date: string;
  is_new:boolean;
  dateString:string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = `${environment.apiUrl}/websites`;
  
  constructor(private http:HttpClient) { }

  getByWebsite(website_id: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/${website_id}/articles`);
  }
  getNewByWebsite(website_id: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/${website_id}/new_articles`);
  }
}
