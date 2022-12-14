import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputItemModule } from 'ng-zorro-antd-mobile';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'ng-zorro-antd-mobile';
import { WhiteSpaceModule } from 'ng-zorro-antd-mobile';
import { WingBlankModule } from 'ng-zorro-antd-mobile';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { RouterModule } from '@angular/router';
import { TabBarModule } from 'ng-zorro-antd-mobile';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';






import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { FirstComponent } from './view/first/first.component';
import { RegisterComponent } from './view/register/register.component';
import { TabbarComponent } from './view/tabbar/tabbar.component';
import { NewsComponent } from './view/news/news.component';
import { MyComponent } from './view/my/my.component';
import { NewComponent } from './view/new/new.component';
import { NewInfoComponent } from './view/new-info/new-info.component';
import { CoverlistComponent } from './view/coverlist/coverlist.component';
import { ContentlistComponent } from './view/new-info/contentlist/contentlist.component';
import { ListComponent } from './view/news/list/list.component';
import { MyInterceptor } from './httpinterceptor/myInterceptor';
import { NewInfobychannelComponent } from './view/new-infobychannel/new-infobychannel.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FirstComponent,
    RegisterComponent,
    TabbarComponent,
    NewsComponent,
    MyComponent,
    NewComponent,
    NewInfoComponent,
    CoverlistComponent,
    ContentlistComponent,
    ListComponent,
    NewInfobychannelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputItemModule,
    ButtonModule,
    WhiteSpaceModule,
    WingBlankModule,
    NgZorroAntdMobileModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    TabBarModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MyInterceptor,
      multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
