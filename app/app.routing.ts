import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";
import { SiteComponent } from "./site/site.component";
import { SiteCreateComponent } from "./site/create/site.create.component";
import { ViewSiteComponent } from "./site/view/view.site.component";

const routes: Routes = [
    { path: "", component: WelcomeComponent, pathMatch: "full" },
    { path: "sites", component: SiteComponent },
    { path: "create", component: SiteCreateComponent },
    { path: "view", component: ViewSiteComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }