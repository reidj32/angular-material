import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry, MatSidenav } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
  );

  users: Observable<User[]>;

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(
    zone: NgZone,
    private userService: UserService,
    private router: Router
  ) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => (this.mediaMatcher = mql))
    );
  }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
