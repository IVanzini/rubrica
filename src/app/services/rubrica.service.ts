import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Contatto } from '../models/contatto';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RubricaService {
  private baseUrl = environment.JSON_SERVER_BASE_URL;

  constructor(private http: HttpClient) { }

  getContatti(): Observable<Contatto[]> {
    return this.http.get<Contatto[]>(`${this.baseUrl}/contatti`)
    .pipe(
      tap(contatti => console.log(contatti.length + " contatti ricevuti dal server"))
    );
  }

  nuovoContatto(model: any) : Observable<Contatto> {
    return this.http.post<Contatto>(`${this.baseUrl}/contatti`, model);
  }
}
