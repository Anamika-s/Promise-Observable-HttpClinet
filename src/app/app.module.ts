import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PromiseObsComponent } from './promise-obs/promise-obs.component';
import { StudentComponent } from './student/student.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SearchComponent } from './search/search.component';
import { StudComponent } from './stud/stud.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseObsComponent,
    StudentComponent,
    UserComponent,
    ParentComponent,
    ChildComponent,
    SearchComponent,
    StudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
