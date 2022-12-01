import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from './../../../services/applicant.service';
import { Component } from '@angular/core';
import { ICreateApplicantModel } from 'src/app/models/request/applicant/createApplicantModel';

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.css']
})
export class CreateApplicantComponent {

  applicants : ICreateApplicantModel[]= []

  constructor(private applicantService : ApplicantService, private activatedRoute : ActivatedRoute){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getApplicant();
     })
  }

  getApplicant(){


    this.applicantService.getApplicant().subscribe(data=> this.applicants=data)

  }

}
