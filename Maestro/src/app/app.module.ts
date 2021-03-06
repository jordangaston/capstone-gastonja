import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {HomePage} from '../pages/home/home';
import {UserPage} from '../pages/user/user';
import {SessionPage} from '../pages/session/session';
import {SessionInfoPage} from "../pages/session-info/session-info";
import { SessionHistPage } from "../pages/session-hist/session-hist";
import { InitSurveyPage } from  "../pages/init-survey/init-survey";
import { SessionSurveyPage } from "../pages/session-survey/session-survey";
import { WelcomePage } from "../pages/welcome/welcome"
import { KnowledgePage } from "../pages/knowledge/knowledge"

import { ListSession } from "../shared/list-session/list-session";
import { SurveyTemp } from "../shared/survey_temp/survey_temp";
import { TimeWorked } from "../shared/graphs/time-worked";

import {DatabaseService} from "../providers/database/db.service";
import {UserService} from "../providers/database/user.service";
import {PasswordService} from "../providers/auth/password.service";
import {SessionService} from "../providers/sessions/session.service";
import {AuthService} from '../providers/auth/auth-service'
import {SurveyService} from '../providers/survey/survey.service'
import {KnowledgeBaseService} from "../providers/knowledge-base/knowlege.base.service"
import {LearningStrategiesService} from "../providers/learning-strategies/learning.strategies.service"
import {UserScore} from "../shared/graphs/user-score"
import {SessionSurveyResultsAnalyzer} from "../providers/sessions/session.survey.results.analyzer";
import {PrevSession} from "../shared/graphs/prev-session"


@NgModule({
  declarations: [
    MyApp,
    // PAGES
    HomePage,
    LoginPage,
    RegisterPage,
    UserPage,
    SessionPage,
    SessionInfoPage,
    SessionHistPage,
    SessionSurveyPage,
    WelcomePage,
    InitSurveyPage,
    KnowledgePage,

    // SHARED
    ListSession,
    SurveyTemp,
    TimeWorked,
    UserScore,
    PrevSession
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    // PAGES
    HomePage,
    LoginPage,
    RegisterPage,
    UserPage,
    SessionPage,
    SessionInfoPage,
    SessionHistPage,
    InitSurveyPage,
    SessionSurveyPage,
    WelcomePage,
    KnowledgePage,

    // SHARED
    TimeWorked,
    SurveyTemp,
    ListSession,
    UserScore,
    PrevSession
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler
  }, AuthService, DatabaseService, UserService, PasswordService, SessionService, SurveyService, KnowledgeBaseService,
     LearningStrategiesService, SessionSurveyResultsAnalyzer]
})
export class AppModule {
}
