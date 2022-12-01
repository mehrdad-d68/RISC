import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class QuizService {

    constructor(private http:HttpClient) { }

    loadAllQuiz(){
        return this.http.get('assets/quiz.json')
            .pipe(
                map((mainModel:any)=>mainModel['questions'])
            )
    }

}
  
  