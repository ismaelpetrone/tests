import { BrowserModule } from '@angular/platform-browser';
import { NgModule, AfterViewInit, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MainComponent } from './main/main.component';
import { GoTo } from './shared/goto/goto.component';
import  { FontAssessmentComponent } from './font-assessment/font-assessment.component';
import { DownloadUrlService } from './shared/downloadurl/downloadurl.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'font-assessment', component: FontAssessmentComponent },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EditorComponent,
    GoTo,
    FontAssessmentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule 
  ],
  providers: [
    DownloadUrlService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
