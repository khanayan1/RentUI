import { Component, OnInit } from '@angular/core';
import { TenantService } from '../tenant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tenant-form',
  templateUrl: './tenant-form.component.html',
  styleUrls: ['./tenant-form.component.css'],
})
export class TenantFormComponent implements OnInit {
  tenant = {
    name: '',
    roomNumber: 0,
    rent: 0,
    startDate: '',
    bill: 0,
    totalUnit: 0,
    totalUnitTillDate :''
  };

  constructor(
    private tenantService: TenantService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const roomNumber = this.route.snapshot.paramMap.get('roomNumber');
    if (roomNumber) {
      this.tenantService.getTenant(+roomNumber).subscribe(data => this.tenant = data);
    }
  }

  onSubmit(): void {
    if (this.tenant.roomNumber) {
      this.tenantService.updateTenant(this.tenant.roomNumber, this.tenant).subscribe(() => {
        this.router.navigate(['/tenants']);
      });
    } else {
      this.tenantService.addTenant(this.tenant).subscribe(() => {
        this.router.navigate(['/tenants']);
      });
    }
  }
}
