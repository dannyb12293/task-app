import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../../../taskModel'; 

@Component({
  selector: 'app-one-task',
  templateUrl: './one-task.component.html',
  styleUrls: ['./one-task.component.css']
})
export class OneTaskComponent implements OnInit {

  currentTask: Task = new Task();

  taskID: number;
  


  constructor(private actRoute: ActivatedRoute, private myTaskService: TasksService, private router: Router ) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.taskID = +params['taskId'];

      this.myTaskService.getOneTask(this.taskID).subscribe(res => {
        this.currentTask = res;
        console.log(res)
      })
    })
    
}

deleteTask(id:number){
  console.log("testing" + id);
  this.myTaskService.deleteTask(id).subscribe(res =>{
    console.log(res);
    this.router.navigate(["allTasks"]);
}
  )
}
}
