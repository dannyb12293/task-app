import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { OneTaskComponent } from './components/one-task/one-task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { UpdateTasksComponent } from './components/update-tasks/update-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    AllTasksComponent,
    OneTaskComponent,
    CreateTaskComponent,
    UpdateTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
