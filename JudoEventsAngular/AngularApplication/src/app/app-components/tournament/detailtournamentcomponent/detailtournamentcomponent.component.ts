import {Component, Input, OnInit} from '@angular/core';
import {TournamentService} from "../tournament.service";
import {Event} from "../../../core/model/event";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-detailtournamentcomponent',
  templateUrl: './detailtournamentcomponent.component.html',
  styleUrls: ['./detailtournamentcomponent.component.css'],
  providers: [TournamentService]
})
export class DetailtournamentcomponentComponent implements OnInit {
  public tournament: Event;

  public id:number;

  private async getTournament(id:number){
    await this.tournamentService.getTournamentById(id);
    console.log("getById");
  }

  constructor(private tournamentService: TournamentService,private router:Router, private route:ActivatedRoute ) {
  }

  async ngOnInit(): Promise<void> {
    console.log("initfirst");
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    await this.getTournament(this.id);
    console.log("getSent");
    this.tournament = this.tournamentService.tournament;


  }

}