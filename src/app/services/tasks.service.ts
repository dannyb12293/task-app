import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../../taskModel';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskUrl: string = "http://localhost:3000/tasks"

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.taskUrl)
  }

  getOneTask(reqID: number): Observable<Task>{
    return this.http.get<Task> (`${this.taskUrl}/${reqID}`)

  } 

  updateTask(editID: number, editedTask: Task): Observable<Task>{
    return this.http.put<Task>(`${this.taskUrl}/${editID}`, editedTask)
}

  deleteTask(deleteID: number): Observable<any>{
    return this.http.delete<any>(`${this.taskUrl}/${deleteID}`)
  }

  createTask(newTask): Observable<any>{
    return this.http.post<any>(this.taskUrl, newTask)

  }
}