import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../../../taskModel';
@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  listOfTasks: any = [];

  constructor(private myTaskService: TasksService) { }

  ngOnInit(): void {
    this.myTaskService.getAllTasks().subscribe(response => {
      console.log(response);
     this.listOfTasks = response;
    })
  }

  deleteTask(id:number){
    console.log("testing" + id);
    this.myTaskService.deleteTask(id).subscribe(res =>{
      console.log(res);
      this.ngOnInit();
    })
  }

}
