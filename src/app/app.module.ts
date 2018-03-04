import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { ForewordComponent } from './foreword/foreword.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { AlumnusComponent } from './alumnus/alumnus.component';
import { ProgramsComponent } from './programs/programs.component';
import { ServicesComponent } from './services/services.component';
import { TeachersComponent } from './teachers/teachers.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { TimetableComponent } from './student-components/timetable/timetable.component';
import { SnavbarComponent } from './student-components/snavbar/snavbar.component';
import { SteachersComponent } from './student-components/steachers/steachers.component';
import { SeventsComponent } from './student-components/sevents/sevents.component';
import { ScontactComponent } from './student-components/scontact/scontact.component';
import { SfooterComponent } from './student-components/sfooter/sfooter.component';
import { SmessagesComponent } from './student-components/smessages/smessages.component';
import { StutorialsComponent } from './student-components/stutorials/stutorials.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    MapComponent,
    AboutComponent,
    ForewordComponent,
    AdmissionsComponent,
    AlumnusComponent,
    ProgramsComponent,
    ServicesComponent,
    TeachersComponent,
    FacilitiesComponent,
    ProjectsComponent,
    EventsComponent,
    NewsComponent,
    ContactComponent,
    LoginComponent,
    TimetableComponent,
    SnavbarComponent,
    SteachersComponent,
    SeventsComponent,
    ScontactComponent,
    SfooterComponent,
    SmessagesComponent,
    StutorialsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
