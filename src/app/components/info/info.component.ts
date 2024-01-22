import { Component } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

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
      link: 'https://www.instagram.com/prosalfinancialservices',
      img: '../../../assets/svg/instagram.svg'
    },
    {
      title: 'Tiktok',
      desc: '¡Siguenos en TikTok!',
      link: 'https://www.tiktok.com/@prosalfinancialservices',
      img: '../../../assets/svg/tiktok.svg'
    },
    {
      title: 'Facebook',
      desc: '¡Siguenos en Facebook!',
      link: 'https://www.tiktok.com/@prosalfinancialservices',
      img: '../../../assets/svg/tiktok.svg'
    }
  ]
}
