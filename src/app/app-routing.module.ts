import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantFormComponent } from './tenant-form/tenant-form.component';

const routes: Routes = [
  { path: 'tenants', component: TenantListComponent },
  { path: 'add-tenant', component: TenantFormComponent },
  { path: 'edit-tenant/:roomNumber', component: TenantFormComponent },
  { path: '', redirectTo: '/tenants', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
