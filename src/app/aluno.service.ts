import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  

  url = "http://localhost:3000/Alunos";

   constructor(private http: HttpClient) { }


  getAluno(): Observable<Aluno[]> {
      return this.http.get<Aluno[]>(this.url);
  }

  salvar(Aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.url, Aluno);

  }
}
