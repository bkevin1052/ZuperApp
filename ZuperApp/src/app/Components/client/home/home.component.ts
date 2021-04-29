import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  servicios = [];
  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    this.authService.checkLogInStatus();
  }
}
