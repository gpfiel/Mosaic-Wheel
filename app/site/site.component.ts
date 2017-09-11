import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { SiteInterface } from "./site.interface";

import * as applicationSettings from "application-settings";

@Component({
    selector: "mw-site-list",
    templateUrl: "./site/site.component.html",
    styleUrls: ["./site/site.css"],
})
export class SiteComponent implements OnInit {
    router: Router;
    siteList: Array<SiteInterface>;

    constructor(router: Router, location: Location, private modal:ModalDialogService) {
        this.router = router;
        this.siteList = JSON.parse(applicationSettings.getString("sites", "[]"));
        location.subscribe((path) => {
            this.siteList = JSON.parse(applicationSettings.getString("sites", "[]"));
        });
    }

    ngOnInit(): void {
       
    }

    create() {
        this.router.navigate(["/create"]);
    }

    delete(itemDeleted:Object) {
        this.siteList = this.siteList.filter(item => item !== itemDeleted);
        applicationSettings.setString("sites", JSON.stringify(this.siteList));
    }

    show(url:string) {
        alert(url);
    }


    back() {
        this.router.navigate([""]);
    }
}