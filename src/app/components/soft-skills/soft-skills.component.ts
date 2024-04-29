import { Component, OnInit } from '@angular/core';
import { SoftSkills } from 'src/app/model/softSkills.model';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css'],
  providers: [SoftSkillsService],
})
export class SoftSkillsComponent implements OnInit {
  sSkills: SoftSkills[] = [];

  constructor(public softSkillsService: SoftSkillsService) {}

  ngOnInit(): void {
    this.softSkillsService.getSoftSkills().subscribe((data) => {
      this.sSkills = data;
    });
  }
}
