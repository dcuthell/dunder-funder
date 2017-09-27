import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model'

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  projects: Project[] = [
    new Project("Help me buy a sled!", "Project", "Recreation", "I was saving up for a sled for the winter so I could take it out for a rip, but they jacked up the tax on my darts and now I'm flat broke. Halp", "Buddy LeGuy")
  ]
  constructor() { }

  ngOnInit() {
  }

}
