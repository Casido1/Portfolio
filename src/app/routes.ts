import { Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
// import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SkillsComponent } from "./components/skills/skills.component";

export const AppRoute: Routes = [{path:"", component:HomeComponent},
                                 {path:"home", component:HomeComponent},
                                 {path:"about", component:AboutComponent},
                                 {path:"skills", component:SkillsComponent},
                                 {path:"projects", component:ProjectsComponent},
                                 {path:"contacts", component:ContactComponent}
                                ]
