import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { ApiFilesComponent } from './components/api-files-component/api-files-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ServicePostFiles } from './services/service.post.files';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { errorInterceptor } from './interceptors/error-interceptor';
import { ErrorComponent } from './components/error-component/error-component';
import { provideToastService } from 'ngx-yet-another-toast-library';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { ServiceEquipos } from './services/service.equipos';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { ServiceEmpleados } from './services/service.empleados';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';
import { SolitoComponent } from './components/solito-component/solito-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    ApiFilesComponent,
    InformesPdfComponent,
    ErrorComponent,
    EquipoComponent,
    LoginComponent,
    SubordinadosComponent,
    SolitoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([errorInterceptor, authTokenInterceptor])),
    provideToastService(),
    ServicePostFiles,
    ServiceEquipos,
    ServiceEmpleados,
  ],
  bootstrap: [App],
})
export class AppModule {}
