import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { Label } from "ui/label";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import * as applicationSettings from "application-settings";

import { SiteInterface } from "../site.interface";

@Component({
    selector: 'web-view-component',
    templateUrl: "./site/view/view.site.component.html",
    styleUrls: ["./site/view/view.site.css"],
})

export class ViewSiteComponent {
    public webViewSrc: string;
    public webViewSrc2: string;
    // public isHidden:boolean = true;
    public positionSite:number = 0;

    router: Router;
    siteList: Array<SiteInterface>;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.siteList = JSON.parse(applicationSettings.getString("sites", "[]"));
        location.subscribe((path) => {
            this.siteList = JSON.parse(applicationSettings.getString("sites", "[]"));
        });

        this.webViewSrc = this.siteList[0] ? this.siteList[0].url : '';
        // if (this.siteList[1]) {
        //     this.webViewSrc2 = this.siteList[1] ? this.siteList[1].url : '';
        // }
        
    }

    nextPage() {
        if (this.siteList.length > 1 && this.siteList[this.positionSite + 1]) {
            this.positionSite++;
            this.webViewSrc = this.siteList[this.positionSite].url
        } else {
            this.positionSite = 0;
            this.webViewSrc = this.siteList[0] ? this.siteList[0].url : '';
        }
    }

    back() {
        this.router.navigate([""]);
    }


    goToCreate() {
        this.router.navigate(["/create"]);
    }
}