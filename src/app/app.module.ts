import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdCardModule,
         MdCheckboxModule, 
         MdButtonModule, 
         MdIconModule, 
         MdToolbarModule,
         MdInputModule,
         MdSidenavModule,
         MdListModule,
         MdSlideToggleModule,
         MaterialModule,
         
        } from '@angular/material';
// Layouts
import { AppComponent } from './app.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { PublicComponent } from './layouts/public/public.component';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { ParentsComponent } from './pages/parents/parents.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';

// Services
import { StudentsService } from './services/students.service';
import { AuthService } from './services/auth.service';
import { ClassService } from './services/class.service';
import { ParentsService } from './services/parents.service';
import { TeachersService } from './services/teachers.service';

// Components
import { DashboardSidebarComponent } from './layouts/components/dashboard-sidebar/dashboard-sidebar.component';
import { AddClassComponent } from './pages/classes/components/add-class/add-class.component';
import { AddStudentComponent } from './pages/students/components/add-student/add-student.component';
import { AddParentComponent } from './pages/parents/components/add-parent/add-parent.component';
import { AddTeacherComponent } from './pages/teachers/components/add-teacher/add-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardSidebarComponent,
    PublicComponent,
    LoginComponent,
    HomeComponent,
    StudentsComponent,
    ParentsComponent,
    ClassesComponent,
    TeachersComponent,
    AttendanceComponent,
    AddClassComponent,
    AddStudentComponent,
    AddParentComponent,
    AddTeacherComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes,
    BrowserAnimationsModule,
    MdButtonModule,MdCardModule,MdIconModule,MdToolbarModule,
    MdInputModule,MdSidenavModule,MdListModule,MdSlideToggleModule,
    MaterialModule,
  ],
  providers: [
    StudentsService,
    AuthService,
    ClassService,
    ParentsService,
    TeachersService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
