import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { OneTaskComponent } from './components/one-task/one-task.component';
import { UpdateTasksComponent } from './components/update-tasks/update-tasks.component';
const routes: Routes = [
  { path: "allTasks", component: AllTasksComponent},
  { path: "allTasks/:taskId", component: OneTaskComponent},
  { path: "createTask", component: CreateTaskComponent},
  { path: "updateTask/:taskId", component: UpdateTasksComponent},
  { path: "", redirectTo:"allTasks", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
