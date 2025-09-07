
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { Profile } from './class/profile.class';

@Component({
    selector: 'app-profile',
    imports: [],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class ProfileComponent implements OnInit {

socialMediaItems = Profile.getSocialMediaItems();

informationItems = Profile.getInformationItems();

ngOnInit(): void { }

}
