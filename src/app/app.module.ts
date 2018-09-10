import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthenticationModule } from './core/auth/authentication.module';
import { NgxPermissionsModule } from 'ngx-permissions';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeApiService } from './fake-api/fake-api.service';

import { LayoutModule } from './content/layout/layout.module';
import { PartialsModule } from './content/partials/partials.module';
import { CoreModule } from './core/core.module';
import { AclService } from './core/services/acl.service';
import { LayoutConfigService } from './core/services/layout-config.service';
import { MenuConfigService } from './core/services/menu-config.service';
import { PageConfigService } from './core/services/page-config.service';
import { UserService } from './core/services/user.service';
import { UtilsService } from './core/services/utils.service';
import { ClassInitService } from './core/services/class-init.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig, MatProgressSpinnerModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

import { MessengerService } from './core/services/messenger.service';
import { ClipboardService } from './core/services/clipboard.sevice';

import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LayoutConfigStorageService } from './core/services/layout-config-storage.service';
import { LogsService } from './core/services/logs.service';
import { QuickSearchService } from './core/services/quick-search.service';
import { SubheaderService } from './core/services/layout/subheader.service';
import { HeaderService } from './core/services/layout/header.service';
import { MenuHorizontalService } from './core/services/layout/menu-horizontal.service';
import { MenuAsideService } from './core/services/layout/menu-aside.service';
import { LayoutRefService } from './core/services/layout/layout-ref.service';
import { SplashScreenService } from './core/services/splash-screen.service';
import { DataTableService } from './core/services/datatable.service';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	// suppressScrollX: true
};

let config = new AuthServiceConfig([
	{
		id: GoogleLoginProvider.PROVIDER_ID,
		provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
	},
	{
		id: FacebookLoginProvider.PROVIDER_ID,
		provider: new FacebookLoginProvider('561602290896109')
	},
	{
		id: LinkedInLoginProvider.PROVIDER_ID,
		provider: new LinkedInLoginProvider('78iqy5cu2e1fgr')
	}
]);

export function provideConfig() {
	return config;
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		environment.isMockEnabled ? HttpClientInMemoryWebApiModule.forRoot(FakeApiService) : [],
		LayoutModule,
		PartialsModule,
		CoreModule,
		OverlayModule,
		AuthenticationModule,
		NgxPermissionsModule.forRoot(),
		NgbModule.forRoot(),
		TranslateModule.forRoot(),
		MatProgressSpinnerModule,
		SocialLoginModule,
	],
	providers: [
		AclService,
		LayoutConfigService,
		LayoutConfigStorageService,
		LayoutRefService,
		MenuConfigService,
		PageConfigService,
		UserService,
		UtilsService,
		ClassInitService,
		MessengerService,
		ClipboardService,
		LogsService,
		QuickSearchService,
		DataTableService,
		SplashScreenService,
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		},
		{
			provide: AuthServiceConfig,
			useFactory: provideConfig
		},
		// template services
		SubheaderService,
		HeaderService,
		MenuHorizontalService,
		MenuAsideService,
		{
			provide: HAMMER_GESTURE_CONFIG,
			useClass: GestureConfig
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
