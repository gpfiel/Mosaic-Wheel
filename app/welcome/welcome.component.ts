import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AnimationCurve } from "ui/enums";
import { Router } from "@angular/router";
import { Color } from "color";
import { View } from "ui/core/view";
import { Page } from "ui/page";

@Component({
    selector: "mw-welcome",
    templateUrl: "./welcome/welcome.component.html",
    styleUrls: ["./welcome/welcome.css"],
})
export class WelcomeComponent implements OnInit {
    @ViewChild("logoMosaic") logoMosaic: ElementRef;
    title:string;
    openSites:string;
    listSites:string;
    createdBy:string;
    loading:boolean;
    
    constructor(private _page: Page, private router: Router) { }

    ngOnInit(): void {
        this.loading = true;
        this.title = "Mosaic Wheel";
        this.openSites = "Load your sites";
        this.listSites = "View your sites";
        this.createdBy = "Created by: Gabriel Fiel";

        this._page.actionBarHidden = true;
        
        setTimeout(() => {
            this.toggleDisplay();
        }, 2000);
    }

    checkSitesList(): void {
        this.router.navigate(["/sites"]);
    }

    openSitesTap(): void {
        this.router.navigate(["/view"]);
    }

    creatorInfo(): void{
        alert("Gabriel is an experienced software developer.");
    }

    toggleDisplay() {
        let logoMosaic = <View>this.logoMosaic.nativeElement;

        logoMosaic.animate({
            translate: { x: 0, y: 400 },
            duration: 1500,
            rotate: 700,
            curve: AnimationCurve.easeInOut
        });

        setTimeout(() => {
            this.loading = false;
        }, 1000);
      }
}