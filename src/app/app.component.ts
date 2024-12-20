import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    StudentComponent,
    FormsModule,
    CommonModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  student = { name: '', age: null as number | null, grade: '' };
  students: {
    name: string;
    age: number | null;
    grade: string;
  }[] = [];
  addStudent() {
    this.students.push({ ...this.student });
    this.student = { name: '', age: null, grade: '' };
  }
}
