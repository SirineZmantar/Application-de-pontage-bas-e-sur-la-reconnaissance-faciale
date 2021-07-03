import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseurl + '/users/',
    {headers: this.httpHeaders});
  }
  getOneUser(id): Observable<any> {
    return this.http.get(this.baseurl + '/users/' + id +'/',
    {headers: this.httpHeaders});
  }
  public upload(formData) {
    return this.http.post<any>(this.baseurl + '/users/' , formData);
  }
 /*updateUser(user): Observable<any> {
    const body = { image : user.image, lastname: user.lastname, firstname:user.firstname,  email: user.email, tel:user.tel, service:user.service,pwd: user.pwd};
    return this.http.put(this.baseurl + '/users/' + user.id +'/', body,
    {headers: this.httpHeaders});
 }*/
 update(id, data) {
  return this.http.put<any>(this.baseurl + '/users/' + id +'/', data);
}
 delete(id) {
  return this.http.delete(this.baseurl + '/users/' + id +'/');
}

}