import { CalenderService } from "./../../../services/calender/calender.service";
import { ModalController, ToastController } from "@ionic/angular";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  @Input() typeView: any;
  @Input() eventId: any;

  name: string;
  description: string;
  type: string;
  format: string;
  date: string;
  hour: string;

  constructor(
    private service: CalenderService,
    private modalCtr: ModalController,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    if (this.typeView === "view" || this.typeView === "edit") {
      this.getEventById();
    }
  }

  cancelModal() {
    this.modalCtr.dismiss();
  }

  createUpdateCalendar() {
    try {
      if (this.typeView == "edit") {
        let dateFormat;
        let splitDate = this.date.split("-");
        dateFormat = splitDate[2] + "/" + splitDate[1];

        this.service
          .update(this.eventId, {
            name: this.name,
            description: this.description,
            type: this.type,
            format: this.format,
            date: dateFormat,
            year: splitDate[0],
            hours: this.hour,
          })
          .subscribe((e) => console.log(e));
      } else {
        let dateFormat;
        let splitDate = this.date.split("-");
        dateFormat = splitDate[2] + "/" + splitDate[1];

        this.service
          .creteEvent({
            name: this.name,
            description: this.description,
            type: this.type,
            format: this.format,
            date: dateFormat,
            year: splitDate[0],
            hours: this.hour,
          })
          .subscribe((e) => console.log(e));
          this.modalCtr.dismiss();

      }
    } catch {
      this.presentToast("Algum campo obrigatorio está preenchido errado")
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      color : "danger"
    });
    toast.present();
  }

  disabledInput() {
    return this.typeView == "view";
  }

  private getEventById() {
    this.service.getEventById(this.eventId).subscribe((data: any) => {
      let dateSplit = data.date.split("/");
      let dateFormat = data.year + "-" + dateSplit[1] + "-" + dateSplit[0];
      this.name = data.name;
      this.description = data.description;
      this.type = data.type;
      this.format = data.format;
      this.date = dateFormat;
      this.hour = data.hours;
    });
  }
}
