import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Hello workshop';
  currentLesson = null;
  lessons = null;

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.lessons = this.lessonsService.all();
  }



  selectLesson(lesson) {
    console.log(lesson);
    this.currentLesson = lesson;
  }

}
