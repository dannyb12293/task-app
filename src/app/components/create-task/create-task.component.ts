import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../../../taskModel';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  newTask: Task = new Task();

  constructor(private myTaskService: TasksService, private router: Router) { }

  ngOnInit(): void {
  }
  createNew(){
    this.myTaskService.createTask(this.newTask).subscribe(response =>{
      console.log(response);
      this.router.navigate(["allTasks"]);
    })
  }
  

}
