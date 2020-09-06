import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from 'src/app/store.service';
import { Observable } from 'rxjs';
import { PlayerService } from 'src/app/players.service';

@Component({
  selector: 'app-my-squad',
  templateUrl: './my-squad.component.html',
  styleUrls: ['./my-squad.component.css']
})
export class MySquadComponent implements OnInit {
  @Input() leagueId: string;
  resBids$: Observable<any[]>;
  teams$: Observable<Map<number, string>>;
  constructor(private store: StoreService, private playerApi: PlayerService) { }

  ngOnInit() {
    this.resBids$ = this.store.getResolvedBids(this.leagueId);
    this.teams$ = this.playerApi.getTeamMap();
  }

  // getShortHandPosition(position: string): string {
  //   if (position.includes('Goalkeeper')) {
  //     return 'GK';
  //   } else if (position.includes('Defender')) {
  //     return 'DEF';
  //   } else if (position.includes('Midfielder')) {
  //     return 'MID';
  //   } else {
  //     return 'FWD';
  //   }
  // }
}
