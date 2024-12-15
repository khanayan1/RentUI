import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tenant } from './tenant.model';  // Import Tenant interface

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private apiUrl = 'http://localhost:8080/api/tenants';

  constructor(private http: HttpClient) { }

  getTenants(): Observable<Tenant[]> {
    return this.http.get<Tenant[]>(this.apiUrl);
  }

  getTenant(roomNumber: number): Observable<Tenant> {
    return this.http.get<Tenant>(`${this.apiUrl}/${roomNumber}`);
  }

  addTenant(tenant: Tenant): Observable<Tenant> {
    return this.http.post<Tenant>(this.apiUrl, tenant);
  }

  updateTenant(roomNumber: number, tenant: Tenant): Observable<Tenant> {
    return this.http.put<Tenant>(`${this.apiUrl}/${roomNumber}`, tenant);
  }

  deleteTenant(roomNumber: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${roomNumber}`);
  }
}
