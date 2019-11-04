import { Component } from '@angular/core';
import { ZitateService } from './zitate.service';

@Component({
  selector: 'zitat-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  zitat = 'Daten werden geladen ...';

  constructor(private zitateService: ZitateService) {
    this.getZitat();
  }

  getZitat() {
    this.zitateService.getZitat().subscribe(
      data => {
        this.zitat = data['zitat'];
      },
      error => {
        this.zitat = 'Fehler:' + JSON.stringify(error);
      }
    );
  }
}
