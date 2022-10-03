import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-session-modal',
  templateUrl: './session-modal.component.html',
  styleUrls: ['./session-modal.component.scss']
})
export class SessionModalComponent implements OnInit {

  public auth!: boolean;
  constructor(
    private router: Router,
    private authService: AuthServiceService
    ) { }

  ngOnInit(): void {
    this.autchCheck();
  }
    public autchCheck(): void {
    this.authService.checkSession();
    this.auth = this.authService.getIsAuth();
  }

 public confirm(): void {
    this.router.navigate(['login']);
    }
    

}
