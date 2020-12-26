import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  user: any;
  userBio = `Programmation | Ingénierie | Cloud | IT - Développeur Full-Stack avec une maîtrise en ingénierie et plus de 20 ans d'expérience internationale en ingénierie.`;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getUser('andrewjbateman').subscribe((user) => {
      this.user = user;
    });
  }
}
