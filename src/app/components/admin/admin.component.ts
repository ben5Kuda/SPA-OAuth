import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AdminState, selectIdentity } from 'src/app/store/reducers/admin.reducer';
import { getIdentity } from 'src/app/store/actions/admin.actions';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public adminStore: Store<AdminState>) { }

  identity: User;

  getIdentity() {
  }

  ngOnInit() {
    this.adminStore.dispatch(getIdentity());

    this.adminStore.pipe(select(selectIdentity)).subscribe(
      data => {
         this.identity = data;
        });
  }

}
