import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmailSendingService } from './email-sending.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private emailService = inject(EmailSendingService);

  emailSendingForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
  });

  onSubmit() {
    const data = this.emailSendingForm.getRawValue();

    this.emailService.sendEmail(data);
  }
}
