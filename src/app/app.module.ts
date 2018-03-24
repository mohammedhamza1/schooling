//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './home-component/navbar/navbar.component';
import { FooterComponent } from './home-component/footer/footer.component';
import { SliderComponent } from './home-component/slider/slider.component';
import { MapComponent } from './home-component/map/map.component';
import { AboutComponent } from './home-component/about/about.component';
import { ForewordComponent } from './home-component/foreword/foreword.component';
import { ProgramsComponent } from './home-component/programs/programs.component';
import { ServicesComponent } from './home-component/services/services.component';
import { ProjectsComponent } from './home-component/projects/projects.component';
import { ContactComponent } from './home-component/contact/contact.component';
import { LoginComponent } from './home-component/login/login.component';
import { TimetableComponent } from './student-components/timetable/timetable.component';
import { SnavbarComponent } from './student-components/snavbar/snavbar.component';
import { SteachersComponent } from './student-components/steachers/steachers.component';
import { SeventsComponent } from './student-components/sevents/sevents.component';
import { ScontactComponent } from './student-components/scontact/scontact.component';
import { SfooterComponent } from './student-components/sfooter/sfooter.component';
import { SmessagesComponent } from './student-components/smessages/smessages.component';
import { StutorialsComponent } from './student-components/stutorials/stutorials.component';
import { HomeComponent } from './home-component/home/home.component';
import { StudentComponent } from './student-components/student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SinformationComponent } from './student-components/sinformation/sinformation.component';
import { LecturesTableComponent } from './student-components/lectures-table/lectures-table.component';
import { MidtermTableComponent } from './student-components/midterm-table/midterm-table.component';
import { FinalTableComponent } from './student-components/final-table/final-table.component';



// our routes
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentComponent },
  {
    path: '',
    redirectTo: '/student',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    MapComponent,
    AboutComponent,
    ForewordComponent,
    ProgramsComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
    LoginComponent,
    TimetableComponent,
    SnavbarComponent,
    SteachersComponent,
    SeventsComponent,
    ScontactComponent,
    SfooterComponent,
    SmessagesComponent,
    StutorialsComponent,
    HomeComponent,
    StudentComponent,
    PageNotFoundComponent,
    SinformationComponent,
    LecturesTableComponent,
    MidtermTableComponent,
    FinalTableComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
