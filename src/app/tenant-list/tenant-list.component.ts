import { Component, OnInit } from '@angular/core';
import { TenantService } from '../tenant.service';
import { Tenant } from '../tenant.model';  // Import Tenant interface

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css'],
})
export class TenantListComponent implements OnInit {
  tenants: Tenant[] = [];  // Explicitly typed as Tenant[]

  constructor(private tenantService: TenantService) { }

  ngOnInit(): void {
    this.tenantService.getTenants().subscribe((data: Tenant[]) => {
      this.tenants = data;
    });
  }

  deleteTenant(roomNumber: number): void {
    this.tenantService.deleteTenant(roomNumber).subscribe(() => {
      // Filter out the deleted tenant from the local array
      this.tenants = this.tenants.filter(tenant => tenant.roomNumber !== roomNumber);
    });
  }
}
