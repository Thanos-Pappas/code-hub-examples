import { RouterModule, Routes } from '@angular/router';
import { BasicFormModule } from "./modules/basic-form/basic-form.module";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BuiltInDirectivesModule } from "./modules/built-in-directives/built-in-directives.module";
import { ComponentsInteractionModule } from "./modules/components-interaction/components-interaction.module";
import { Day2ComponentsExampleModule } from "./modules/day-2-components-example/day-2-components-example.module";
import { HttpServiceModule } from "./modules/http-service/http-service.module";
import { LifecycleExampleModule } from "./modules/lifecycle-example/lifecycle-example.module";
import { ServicesDiExampleModule } from "./modules/services-di-example/services-di-example.module";
import { TeampltesDataBindingModule } from "./modules/teampltes-data-binding/teampltes-data-binding.module";
import { ReactiveFormModule } from "./modules/reactive-form/reactive-form.module";

const appRoutes: Routes = [
  { path: "",  redirectTo: "/basic-form", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    LifecycleExampleModule,
    ServicesDiExampleModule,
    Day2ComponentsExampleModule,
    BuiltInDirectivesModule,
    ComponentsInteractionModule,
    TeampltesDataBindingModule,
    HttpServiceModule,
    BasicFormModule,
    ReactiveFormModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
