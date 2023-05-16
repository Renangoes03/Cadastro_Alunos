import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno: Aluno[] = [];
  formGroupClient: FormGroup;

  constructor(private alunoService: AlunoService,
    private formBuilder: FormBuilder
  ) {

    this.formGroupClient = formBuilder.group({
      ID: [''],
      Nome: [''],
      Email: [''],
      Série: [''],
      Periodo: [''],
      Nota: [''],
      Situacao: [''],

    });

  }




  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.alunoService.getAluno().subscribe(
      {
        next: data => this.aluno = data,
        error: msg => console.log("Erro ao chamar o endpont " + msg)
      }
    )
  }

  Salvar() {
    this.alunoService.Salvar(this.formGroupClient.value).subscribe(
      {
        next: data => {
          this.aluno.push(data);
          this.formGroupClient.reset();
        }
      }
    )
  }

}





