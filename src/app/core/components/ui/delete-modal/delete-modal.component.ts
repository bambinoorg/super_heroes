import { Component, Inject,  OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../../interfaces/hero';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  public hero !: Hero;

  constructor(
    private deleteDialogRef : MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly heroData: Hero
  ) { }

  public ngOnInit(): void {
    this.hero = this.heroData
  }

  public confirmDelete(): void {
    this.deleteDialogRef.close(true);
  }
  public cancelDelete(): void {
    this.deleteDialogRef.close(false);
  }
}
