import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { quizModel } from '../models';
import { ToastService } from '../toast-container/toast.serveic';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizForm=this.fb.group({
    answer:[null,Validators.required],
  })
  quiz:Array<quizModel>=[]
  setScores=0
  setQuestionIndex=0
  show = false;
	autohide = true;
  randomIndex:number=-1
  indexArray:number[]=[]

  constructor(
    private quizService :QuizService,
    private fb: FormBuilder,
    private toastService:ToastService
  ) { }

  ngOnInit(): void {
    this.quizService.loadAllQuiz().subscribe(
      (res:quizModel[])=>{
        this.quiz=res
        this.createrandom()
      }
    )
  }
  createrandom(){
    this.randomIndex = Math.round(Math.random()*(this.quiz.length))
    if(this.indexArray.includes(this.randomIndex)) {
      this.createrandom()

    }else {
      this.indexArray.push(this.randomIndex)
    }
    
  }

  submit(){
    if(this.quizForm.controls['answer'].value ==this.quiz[this.setQuestionIndex].correctIndex) {
      this.setScores++
      this.showSuccess()
    }else {
      this.showDanger('sorry, the right answer is : '+ this.quiz[this.setQuestionIndex].answers[this.quiz[this.setQuestionIndex].correctIndex])
    }
    this.quizForm.patchValue({
      answer:null
    })
    this.setQuestionIndex++
    // this.createrandom()
    
  }
  resetQuiz(){
    this.quizForm.patchValue({
      answer:null
    })
    this.setQuestionIndex=0
    this.setScores=0
    this.showStandard()
  }
  showStandard() {
		this.toastService.show('your form has been reset');
	}

  showSuccess() {
		this.toastService.show('congrats, your answer was corect', { classname: 'bg-success text-light' });
	}

	showDanger(dangerTpl:string) {
		this.toastService.show(dangerTpl, { classname: 'bg-danger text-light'});
	}
}
