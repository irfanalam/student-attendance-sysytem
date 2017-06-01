import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { PublicComponent } from './layouts/public/public.component';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { ParentsComponent } from './pages/parents/parents.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';

// Components

import { AddStudentComponent } from './pages/students/components/add-student/add-student.component';
import { AddClassComponent }   from './pages/classes/components/add-class/add-class.component';
import { AddParentComponent }   from './pages/parents/components/add-parent/add-parent.component';
import { AddTeacherComponent }   from './pages/teachers/components/add-teacher/add-teacher.component';


export const router: Routes = [
    { path: '', component: PublicComponent,
      children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
      ]
    },
    { path: 'dashboard', component: DashboardComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'dashboard', component: HomeComponent },
        { path: 'home', component: HomeComponent },
        { path: 'students',  component: StudentsComponent },
        { path: 'teachers',  component: TeachersComponent },
        { path: 'parents',  component: ParentsComponent },
        { path: 'classes',  component: ClassesComponent },
        { path: 'attendance',  component: AttendanceComponent },
        { path: 'classes/add', component: AddClassComponent},
        { path: 'students/add',  component: AddStudentComponent },
        { path: 'parents/add', component: AddParentComponent },
        { path: 'teachers/add', component: AddTeacherComponent },
      ]
    },
];

// export const routes: ModuleWithProviders = RouterModule.forRoot(router);
export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});
