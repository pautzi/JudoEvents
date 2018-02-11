import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {TournamentDao} from "../../core/dao/tournament.dao";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public eventFormGroup: FormGroup;

  constructor(private router: Router,
              private tournamentDao: TournamentDao,
              private fb:FormBuilder) {

    this.eventFormGroup = fb.group({
      tournamentData: fb.group({
        startDate: [''],
        endDate: [''],
        typeOfEvent: [''],
        tournamentName: [''],
        discription: [''],
        entryFee: [''],
        rewards: [''],
        ageAndWeight: [''],
        eventPicture: [''],
        zipCode: [''],
        city: [''],
        street: [''],
        federalState:[''],
        country: [''],
        longitude: [''],
        latitude: [''],
        countryCode: [''],
        firstName: [''],
        lastName:[''],
        email: [''],
        phoneNumber: [''],
        rerpresentativePicture: ['']
      })
    });
  }

  ngOnInit() {
  }


}
