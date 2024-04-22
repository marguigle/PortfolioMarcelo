import { Component, OnInit } from '@angular/core';
import { HardSkills } from 'src/app/model/hardSkills.model';
import { HardSkillsService } from 'src/app/services/hardSkillsService';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css'],
  providers: [HardSkillsService],
})
export class HardSkillsComponent implements OnInit {
  hSkills: HardSkills[] = [];

  constructor(public hardSkillsService: HardSkillsService) {}

  ngOnInit(): void {
    this.hardSkillsService.getHardSkills().subscribe((data) => {
      this.hSkills = data;
    });
  }
}
