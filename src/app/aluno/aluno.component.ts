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

  alunos: Aluno[] = [];
  formGroupClient: FormGroup;

  constructor(private alunoService: AlunoService,
    private formBuilder: FormBuilder
  ) {

    this.formGroupClient = formBuilder.group({
      id: [''],
      nome: [''],
      email: [''],
      serie: [''],
      periodo: [''],
      nota: [''],
      situacao: [''],

    });

  }




  ngOnInit(): void {
    this.loadAluno();
  }

  loadAluno() {
    this.alunoService.getAluno().subscribe(
      {
        next: data => this.alunos = data,
        error: msg => console.log("Erro ao chamar o endpont " + msg)
      }
    )
  }

  salvar() {
    this.alunoService.salvar(this.formGroupClient.value).subscribe(
      {
        next: data => {
          this.alunos.push(data);
          this.formGroupClient.reset();
        }
      }
    )
  }

}





