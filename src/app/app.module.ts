import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';  // Import RouterModule here
import { AppComponent } from './app.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantFormComponent } from './tenant-form/tenant-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    TenantListComponent,
    TenantFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule
    
     // Add RouterModule to imports
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
