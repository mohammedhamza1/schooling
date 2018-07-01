//Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from  'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//services
import {TimetableService} from './student-services/timetable.service';
import {LoginService} from './home-services/login.service';
import {AteachersService} from './admin-services/ateachers.service';

//Components
import {AppComponent} from './app.component';
import {NavbarComponent} from './home-component/navbar/navbar.component';
import {FooterComponent} from './home-component/footer/footer.component';
import {SliderComponent} from './home-component/slider/slider.component';
import {MapComponent} from './home-component/map/map.component';
import {AboutComponent} from './home-component/about/about.component';
import {ForewordComponent} from './home-component/foreword/foreword.component';
import {ProgramsComponent} from './home-component/programs/programs.component';
import {ServicesComponent} from './home-component/services/services.component';
import {ProjectsComponent} from './home-component/projects/projects.component';
import {ContactComponent} from './home-component/contact/contact.component';
import {LoginComponent} from './home-component/login/login.component';
import {TimetableComponent} from './student-components/timetable/timetable.component';
import {SnavbarComponent} from './student-components/snavbar/snavbar.component';
import {SteachersComponent} from './student-components/steachers/steachers.component';
import {SeventsComponent} from './student-components/sevents/sevents.component';
import {ScontactComponent} from './student-components/scontact/scontact.component';
import {SfooterComponent} from './student-components/sfooter/sfooter.component';
import {SmessagesComponent} from './student-components/smessages/smessages.component';
import {StutorialsComponent} from './student-components/stutorials/stutorials.component';
import {HomeComponent} from './home-component/home/home.component';
import {StudentComponent} from './student-components/student/student.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SinformationComponent} from './student-components/sinformation/sinformation.component';
import {LecturesTableComponent} from './student-components/lectures-table/lectures-table.component';
import {MidtermTableComponent} from './student-components/midterm-table/midterm-table.component';
import {FinalTableComponent} from './student-components/final-table/final-table.component';
import {ParentComponent} from './parent-components/parent/parent.component';
import {PnavbarComponent} from './parent-components/pnavbar/pnavbar.component';
import {PfooterComponent} from './parent-components/pfooter/pfooter.component';
import {PinformationComponent} from './parent-components/pinformation/pinformation.component';
import {PattendanceComponent} from './parent-components/pattendance/pattendance.component';
import {SchoolFeesComponent} from './parent-components/school-fees/school-fees.component';
import {DegreesComponent} from './parent-components/degrees/degrees.component';
import {FinalDegreesComponent} from './parent-components/final-degrees/final-degrees.component';
import {YearWorksDegreesComponent} from './parent-components/year-works-degrees/year-works-degrees.component';
import {PevntsComponent} from './parent-components/pevnts/pevnts.component';
import {PmessagesComponent} from './parent-components/pmessages/pmessages.component';
import {PcontactComponent} from './parent-components/pcontact/pcontact.component';
import {AdminComponent} from './admin-components/admin/admin.component';
import {AnavbarComponent} from './admin-components/anavbar/anavbar.component';
import {AinformationsComponent} from './admin-components/ainformations/ainformations.component';
import {AmessagesComponent} from './admin-components/amessages/amessages.component';
import {AfooterComponent} from './admin-components/afooter/afooter.component';
import {StaffComponent} from './admin-components/staff/staff.component';
import {AteachersComponent} from './admin-components/staff/ateachers/ateachers.component';
import { ClassesComponent } from './admin-components/staff/classes/classes.component';
import { AnotificationsComponent } from './admin-components/anotifications/anotifications.component';
import { PnotificationsComponent } from './parent-components/pnotifications/pnotifications.component';
import { SnotificationsComponent } from './student-components/snotifications/snotifications.component';
import { AparentsComponent } from './admin-components/aparents/aparents.component';
import { AeventsComponent } from './admin-components/aevents-and-news/aevents/aevents.component';
import { AeventsAndNewsComponent } from './admin-components/aevents-and-news/aevents-and-news.component';
import { AnewsComponent } from './admin-components/aevents-and-news/anews/anews.component';
import { TeacherComponent } from './teacher-components/teacher/teacher.component';

// our routes
const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'student', component: StudentComponent},
    {path: 'parent', component: ParentComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'teacher', component: TeacherComponent},
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {path: '**', component: PageNotFoundComponent},
];


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
        FinalTableComponent,
        ParentComponent,
        PnavbarComponent,
        PfooterComponent,
        PinformationComponent,
        PattendanceComponent,
        SchoolFeesComponent,
        DegreesComponent,
        FinalDegreesComponent,
        YearWorksDegreesComponent,
        PevntsComponent,
        PmessagesComponent,
        PcontactComponent,
        AdminComponent,
        AnavbarComponent,
        AinformationsComponent,
        AmessagesComponent,
        AfooterComponent,
        StaffComponent,
        AteachersComponent,
        ClassesComponent,
        AnotificationsComponent,
        PnotificationsComponent,
        SnotificationsComponent,
        AparentsComponent,
        AeventsComponent,
        AeventsAndNewsComponent,
        AnewsComponent,
        TeacherComponent
    ],
    imports: [
        BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule, NgxPaginationModule, Ng2SearchPipeModule
    ],
    providers: [TimetableService, LoginService, AteachersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
