import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from './course.service';
import { Course } from './courses';


@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course: Course;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService
      .retrieveById(+this.route.snapshot.paramMap.get('id'))
      .subscribe({
        next: course => this.course = course,
        error: err => console.error('Error', err)
      });
  }

  save(): void {
    this.courseService
      .save(this.course)
      .subscribe({
        next: course => console.log('Saved with success', this.course),
        error: err => console.error('Error', err)
      });
  }
}
