import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MainComponent } from './main/main.component';
import { GoTo } from './shared/goto/goto.component';
import  { FontAssessmentComponent } from './font-assessment/font-assessment.component';
import { DownloadUrlService } from './shared/downloadurl/downloadurl.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MediaMatcher } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'font-assessment', component: FontAssessmentComponent },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full' },
    { path: '**',
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
    HttpClientModule,
    FormsModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [
    DownloadUrlService,
    MediaMatcher
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
