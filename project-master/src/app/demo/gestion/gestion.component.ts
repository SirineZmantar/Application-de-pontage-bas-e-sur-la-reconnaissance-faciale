import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/demo/models/user.model';
import {NgModule} from '@angular/core';
import {FormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { ControlValueAccessor } from "@angular/forms";
import { Directive } from "@angular/core";
import { ElementRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ApiService } from './api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
  providers: [ApiService]
})
export class GestionComponent implements OnInit {
	baseurl = 'http://127.0.0.1:8000'
	form: FormGroup;
	response;
	imageURL;
   
	  users = [{id: -1,image : null ,lastname :'', firstname : '', email : '', tel : null, service: '', pwd:''}]//e.date_e, e.date_s: 'test' , } ];
	  user = { id : -1 ,
		image : null ,lastname :'', firstname : '', email : '', tel : null, service: '', pwd:'', date_e:null, date_s:null
  
	  }
	 cur = null ;
	constructor(private formBuilder: FormBuilder,private myap: ApiService , private route: ActivatedRoute,
	  private router: Router) { 
	   this.getUsers();
	}
	
	
	ngOnInit() {
	  this.form = this.formBuilder.group({
		image: [''],
	   
		lastname : [''], 
		firstname : [''],
		email : [''],
		 tel : [''],
		  service: [''],
		   pwd:['']
	   
	  });
	}
	getUsers = () => {
	  this.myap.getAllUsers().subscribe(
	  data => {
		   this.users = data;
	  },
	  error => {
		console.log(error)
	  })
	}
	deleteuser(d) {
	  const index = this.users.indexOf(d);
	  const id = d.id;
	  alert(id)
	  this.myap.delete(id).subscribe(
	  (res) => {
		this.response = res;
	   
		console.log(res);
  
		},
		  error => {
			console.log(error);
		  });
	  this.users.splice(index, 1);
	}
	updateuser(d) {
	  const id = d.id;
	  alert(id);
	  const formData = new FormData();
	  /* if (this.form.get('image').value.length>0) {*/
	   formData.append('image',this.form.get('image').value);
	   
	   if (this.user.lastname != '')
	  formData.append('lastname', this.user.lastname);
	  if (this.user.firstname != '')
	  formData.append('firstname',  this.user.firstname);
	  if (this.user.email != '')
	  formData.append('email',   this.user.email);
	  if (this.user.pwd != '')
	  formData.append('pwd',  this.user.pwd);
	  if (this.user.tel != '')
	  formData.append('tel',  this.user.tel);
	  if (this.user.service != '')
	  formData.append('service',this.user.service);
	 /* formData.append('date_e', this.form.get('datee').value);
	  formData.append('date_s', this.form.get('dates').value);
	  this.user.image = this.form.get('image').value;
	  this.user.lastname=this.form.get('lastname').value;
	  this.user.firstname= this.form.get('firstname').value;
		  this.user.email=this.form.get('email').value;
		  this.user.pwd= this.form.get('pwd').value;
		  this.user.tel= this.form.get('tel').value;
		  alert(this.user.tel)
		  this.user.service=  this.form.get('service').value;
		//  this.users.push(this.user);*/
	
	 
	  this.myap.update(id, formData)
		.subscribe(
		  response => {
			console.log(response);
			
		  },
		  error => {
			console.log(error);
		  });
	}
  
	onSubmit() {
	  const formData = new FormData();
	
	  formData.append('image', this.form.get('image').value);
	  formData.append('lastname', this.form.get('lastname').value);
	  formData.append('firstname', this.form.get('firstname').value);
	  formData.append('email', this.form.get('email').value);
	  formData.append('pwd', this.form.get('pwd').value);
	  formData.append('tel', this.form.get('tel').value);
	  formData.append('service', this.form.get('service').value);
	 /* formData.append('date_e', this.form.get('datee').value);
	  formData.append('date_s', this.form.get('dates').value);*/
	  this.user.image = this.form.get('image').value;
	  this.user.lastname=this.form.get('lastname').value;
	  this.user.firstname= this.form.get('firstname').value;
		  this.user.email=this.form.get('email').value;
		  this.user.pwd= this.form.get('pwd').value;
		  this.user.tel= this.form.get('tel').value;
		  this.user.service=  this.form.get('service').value;
	  this.users.push(this.user);
  
	  this.myap.upload(formData).subscribe(
		(res) => {
		  this.response = res;
		  this.imageURL = `${this.baseurl}${res.file}`;/*, res.text, res.text, res.text, res.text, res.text, res.text*/
		  console.log(res);
		  console.log(this.imageURL);
		  alert("ajout bon")
		},
		(err) => {  
		  console.log(err);
		}
	  );
	}
  
  
	onChange(event) {
	  if (event.target.files.length > 0) {
		const file = event.target.files[0];
		this.form.get('image').setValue(file);
	  
		}
	  
   
	}
	Change(event) {
	
		
	  if (event.target.value.length > 0){
		const file1 = event.target.value;
		this.form.get('lastname').setValue(file1);
	  
	}}
	Change1(event) {
	
		
	  if (event.target.value.length > 0){
		const file1 = event.target.value;
		this.form.get('firstname').setValue(file1);
	  
	}}
	Change2(event) {
	
		
	  if (event.target.value.length > 0){
		const file1 = event.target.value;
		this.form.get('email').setValue(file1);
	  
	}}
	Change3(event) {
	
		
	  if (event.target.value.length > 0){
		const file1 = event.target.value;
		this.form.get('pwd').setValue(file1);
	  
	}}
	Change4(event) {
	
		
	  if (event.target.value.length > 0){
		const file1 = event.target.value;
		this.form.get('tel').setValue(file1);
	  
	}}
	Change5(event) {
	
		
	  if (event.target.value.length > 0){
		const file1 = event.target.value;
		this.form.get('service').setValue(file1);
	  
	}
  
  }
  /*Change6(event) {
	
		
	if (event.target.value.length > 0){
	  const file1 = event.target.value;
	  this.form.get('datee').setValue(file1);
	
  }}
  Change7(event) {
	
		
	if (event.target.value.length > 0){
	  const file1 = event.target.value;
	  this.form.get('dates').setValue(file1);
	
  }}*/
   
   
		 
   /* Register =() => {
	  this.myap.Register(this.user).subscribe(
		data => {
		  this.user = data;
		},
		error => {
		  console.log(error)
		})
	}*/
	 userclicked =(user) => {
	  this.myap.getOneUser(user.id).subscribe(
		data => {
		 this.user.id = data.id ;
		  this.user.image= data.image;
		  this.user.lastname = data.lastname;
		  this.user.firstname = data.firstname;
		  this.user.email=data.email;
		  this.user.tel= data.tel;
		  this.user.service= data.service;
		  this.user.pwd=  data.pwd;
  
		},
		error => {
		  console.log(error)
		}
	  )
	}

}

/*
  OnFileSelected(event){
    console.log(event);

  }
  constructor() { 
    this.deleteUser(1);
  }
     
  ngOnInit() {
  }
  id =1 ;
  empl = [ new User(this.id,null ,'','','',0,'','')];//  new Date(),new Date())];
  is = null;
  addUser(e){
    if(this.is != null ){
      this.update(this.tempEdit,e)
    }else{
      this.id+=1;
      const user1 = new User(e.id, e.image,e.lastname, e.firstname,  e.email, e.tel, e.service, e.pwd) ;//e.date_e, e.date_s);
      this.empl.push(user1);
      this.resetuser(e);
    }
  }

  tempEdit = null;
  update(model,e)
  { 
    for(let i =0; i < this.empl.length;++i)
    {
      if (this.empl[i].id === model.id)
      {
      e.empl[i].lastname = e.lastname;
      e.empl[i].firstname = e.firstname;
      e.empl[i].image= e.image;
      e.empl[i].email=e.email;
      e.empl[i].tel= e.tel;
      e.empl[i].service= e.service;
      e.empl[i].pwd=  e.pwd;
    //  e.empl[i].date_e=  e.date_e;
    //  e.empl[i].date_s=  e.date_s;
      

      }
    }
   this.resetuser(e);
   this.is = null ;
  }
  deleteUser(d)
  { const index = this.empl.indexOf(d);
    this.empl.splice(index, 1);

  }
  editUser(e,m)
  {
    m.lastname = e.lastname;
    m.firstname = e.firstname;
    m.image= e.image;
    m.email=e.email;
    m.tel= e.tel;
    m.service= e.service;
    m.pwd=  e.pwd;
   
    
    this.tempEdit= e ;
    this.is = e ;

  }
resetuser(e)
{
  e.firstname="";
  e.lastname="";
  e.image="";
  e.email="";
  e.tel="";
  e.service="";
  e.pwd="";
//  e.date_e="";
 // e.date_s=""
}

}*/

