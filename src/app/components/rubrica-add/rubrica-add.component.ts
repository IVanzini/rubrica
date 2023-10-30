import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Contatto } from 'src/app/models/contatto';
import { RubricaService } from 'src/app/services/rubrica.service';

@Component({
  selector: 'app-rubrica-add',
  templateUrl: './rubrica-add.component.html',
  styleUrls: ['./rubrica-add.component.css']
})
export class RubricaAddComponent implements OnInit {
  errorMessage = "";

  constructor(private fb: FormBuilder, private rs: RubricaService, private router: Router) { }

  ngOnInit(): void {
    // this.nuovoContattoForm.valueChanges.subscribe(value => {
    //   this.nomeFormControl.clearValidators();
    //   this.cognomeFormControl.clearValidators();
    //   this.ragioneSocialeFormControl.clearValidators();
    //   this.dataNascitaFormControl.clearValidators();
    //   console.log(value);
    //   if (value.tipologia == "persona fisica") {
    //     console.log("è una persona fisica");
    //     this.nomeFormControl.addValidators([Validators.required]);
    //     this.cognomeFormControl.addValidators([Validators.required]);
    //   } else {
    //     console.log("è una persona giuridica");
    //     this.ragioneSocialeFormControl.addValidators([Validators.required]);
    //   }
    // });
  }

  private get nomeFormControl() {
    return this.nuovoContattoForm.get("nome")!;
  }

  private get cognomeFormControl() {
    return this.nuovoContattoForm.get("cognome")!;
  }

  private get ragioneSocialeFormControl() {
    return this.nuovoContattoForm.get("ragioneSociale")!;
  }

  private get dataNascitaFormControl() {
    return this.nuovoContattoForm.get("dataNascita")!;
  }


  nuovoContattoForm = this.fb.group({
    tipologia: ["", Validators.required],
    nome: [""],
    cognome: [""],
    ragioneSociale: [""],
    email: ["", [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
    numeroTelefono: ["", Validators.required],
    dataNascita: [""],
    indirizzo: this.fb.group({
      via: ["", Validators.required],
      citta: ["", Validators.required],
      provincia: ["", Validators.required],
      cap: ["", Validators.required],
      nazione: ["", Validators.required]
    })
  });

  salva() {
    // const data = this.dataNascitaFormControl.value;
    // console.log(data);
    // if (data) {
    //   const date = new Date(data);
    //   const millis = date.getTime();
    //   console.log(millis);
    //   this.dataNascitaFormControl.setValue("" + millis);
    // }
    this.rs.nuovoContatto(this.nuovoContattoForm.value as Contatto)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.message;
          return of(undefined);
        })
      )
      .subscribe(contatto => {
        if (contatto) {
          this.router.navigate(["/rubrica"]);
        }
      });
  }
}
