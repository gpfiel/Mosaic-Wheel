import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { TextField } from "ui/text-field";
import * as applicationSettings from "application-settings";
 
@Component({
    selector: "create",
    templateUrl: "./site/create/site.create.component.html",
    styleUrls: ["./site/site.css", "./site/create/site.create.css"],
})
export class SiteCreateComponent {

    router: Router;
    location: Location;
    name: string;
    url: string;
 
    constructor(router: Router, location: Location) {
        this.location = location;
        this.name = "";
        this.url = "http://";
        this.router = router;
    }
 
    save() {
        if(this.name.trim() != "" && this.url.trim() != "") {
            var sites: Array<Object> = JSON.parse(applicationSettings.getString("sites", "[]"));
            sites.push({name: this.name, url: this.url});
            applicationSettings.setString("sites", JSON.stringify(sites));
            this.location.back();
        } else {
            alert('Please complete the form below.');
        }
    }

    back() {
        this.location.back();
    }
 
}