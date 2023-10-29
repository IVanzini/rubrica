import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Contatto } from 'src/app/models/contatto';
import { RubricaService } from 'src/app/services/rubrica.service';

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css'],
})
export class RubricaComponent implements OnInit {
  contatti: Contatto[] = [];
  errorMessage = "";

  constructor(private rs: RubricaService) { }

  getContatti(): void {
    this.rs.getContatti()
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.message;
          return of([] as Contatto[]);
        })
      )
      .subscribe((contatti) => {
        this.contatti = contatti;
      });
  }

  ngOnInit(): void {
    this.getContatti();
  }
}
