import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  user$: Observable<User> = new Observable();
  userBio = `Programmation | Ingénierie | Cloud | IT - Développeur Full-Stack avec une maîtrise en ingénierie et plus de 20 ans d'expérience internationale en ingénierie.`;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.user$ = this.githubService.getUser('andrewjbateman');
  }
}
