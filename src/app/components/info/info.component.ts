import { Component } from '@angular/core';
import { SelectorComponent } from '../selector/selector.component';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  
  constructor(public selector: SelectorComponent){
    selector.op = 0;
  }
  es: any = [
    {
      title: 'Agenda una cita',
      desc: 'Aparta un día para reunirte conmigo',
      link: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UVBxcGp2Tlg3VmFmfGRlZmF1bHR8NjgxOTJiODU3M2Q4Zjk3MTY4NzNjMzU0ODk3MzFhOTM',
      img: '../../../assets/svg/calendar.svg'
    },
    {
      title: 'Instagram',
      desc: '¡Siguenos en Instagram!',
      link: 'https://www.instagram.com/prosalfinancialservices/',
      img: '../../../assets/svg/instagram.svg'
    },
    {
      title: 'Facebook',
      desc: '¡Siguenos en Facebook!',
      link: 'https://www.facebook.com/prosalfinancialservices',
      img: '../../../assets/svg/facebook.svg'
    },
    {
      title: 'TikTok',
      desc: '¡Siguenos en TikTok!',
      link: 'https://www.tiktok.com/@javier_saldivar?lang=es',
      img: '../../../assets/svg/tiktok.svg'
    }
  ]
}
