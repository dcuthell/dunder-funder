import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model'
import { ProjectService } from '../project.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm (title: string, type: string, category: string, description: string, creator: string) {
    let newProject: Project = new Project(title, type, category, description, creator);
    this.projectService.addProject(newProject);
  }

}
