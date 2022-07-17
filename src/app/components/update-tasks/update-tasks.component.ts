import { Component, OnInit } from '@angular/core';
import { Task } from 'taskModel';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-tasks',
  templateUrl: './update-tasks.component.html',
  styleUrls: ['./update-tasks.component.css']
})
export class UpdateTasksComponent implements OnInit {

id: number;
currentTask: Task = new Task();
updatedTask: Task = new Task();

  constructor(private actRoute: ActivatedRoute, private myTaskService: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.id = +params['taskId'];

      this.myTaskService.getOneTask(this.id).subscribe(res => {
        this.currentTask = res;
        console.log(res)
        
      })
    })

  }




  updateTask() {
    this.myTaskService.updateTask(this.id, this.updatedTask).subscribe(res =>{
      console.log(res);
      this.router.navigate(["allTasks"]);
    })

  }
}
