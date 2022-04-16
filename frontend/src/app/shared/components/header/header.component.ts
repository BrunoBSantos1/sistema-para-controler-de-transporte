import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgProgress } from '@ngx-progressbar/core';
import { AuthService } from '../../services/auth.service';
import { ProgressBarService } from '../../services/progress-bar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public progressBar: ProgressBarService,
    private progress: NgProgress,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.progressBar.progressRef = this.progress.ref('progressBar');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}
