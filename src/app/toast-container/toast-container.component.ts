import { Component, OnInit, TemplateRef  } from '@angular/core';
import { ToastService } from './toast.serveic';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss']
})
export class ToastContainerComponent implements OnInit {

  constructor(public toastService:ToastService) { }

  ngOnInit(): void {
  }
  isTemplate(toast:any) {
		return toast.textOrTpl instanceof TemplateRef;
	}


}
