import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from './class/profile.class';
import { TranslatePipe } from '@ngx-translate/core';
import { TooltipComponent } from '../shared/components/tooltip/tooltip.component';

@Component({
    selector: 'app-profile',
    imports: [CommonModule, TranslatePipe, TooltipComponent],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class ProfileComponent {
    socialMediaItems = Profile.getSocialMediaItems();
    informationItems = Profile.getInformationItems();

    activeIndex = signal(0);

    // Map each category to an appropriate Boxicon
    categoryIcons = [
        { name: 'Backend', icon: 'bx-server' },
        { name: 'Frontend', icon: 'bx-code-block' },
        { name: 'Mobile & Desktop', icon: 'bx-mobile-alt' },
        { name: 'Databases', icon: 'bx-data' },
        { name: 'DevOps & Tools', icon: 'bx-cog' },
        { name: 'Data Science & Others', icon: 'bx-analyse' }
    ];

    goTo(index: number) {
        this.activeIndex.set(index);
    }
}
