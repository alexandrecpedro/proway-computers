import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  /** ATTRIBUTE **/

  /** CONSTRUCTOR **/
  constructor(
    private _snackBar: MatSnackBar
  ) { }

  /** METHOD **/
  notify(message: string) {
    this._snackBar.open(message, "Ok", {
      // SnackBar duration = 2000 ms
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    });
  }
}
