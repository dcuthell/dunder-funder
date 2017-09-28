import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Project } from '../project.model'
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css'],
  providers: [ProjectService]
})
export class ProjectViewComponent implements OnInit {

  projects;
  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject) {
     this.router.navigate(['projects', clickedProject.$key]);
   };

}
