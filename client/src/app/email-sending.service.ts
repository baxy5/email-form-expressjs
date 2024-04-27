import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

type formData = {
  email: string | null;
  name: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class EmailSendingService {
  private http = inject(HttpClient);

  baseUrl: string = 'http://localhost:3000';

  sendEmail(data: formData) {
    this.http.post(`${this.baseUrl}/email`, data).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
