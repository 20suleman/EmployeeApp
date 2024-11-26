import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
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
