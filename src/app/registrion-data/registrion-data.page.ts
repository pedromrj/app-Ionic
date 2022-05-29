import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrionDataService } from '../services/registrion/registrion-data.service';

@Component({
  selector: 'app-registrion-data',
  templateUrl: './registrion-data.page.html',
  styleUrls: ['./registrion-data.page.scss'],
})
export class RegistrionDataPage implements OnInit {
  constructor(
    private service: RegistrionDataService,
    private router: Router,
    public activerouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let userList = this.service.getUser(
      this.activerouter.snapshot.paramMap.get('id')
    );

    userList.snapshotChanges().subscribe((res) => {
      this.user.push(res.payload.toJSON());
    });
  }

  user: any = [];

  goToListCalendar() {
    this.router.navigate([
      '/list-calender',
      this.activerouter.snapshot.paramMap.get('id'),
    ]);
  }

  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
