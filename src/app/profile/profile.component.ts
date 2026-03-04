import { ChangeDetectionStrategy, Component, type OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from './class/profile.class';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipComponent } from '../shared/components/tooltip/tooltip.component';

@Component({
    selector: 'app-profile',
    imports: [CommonModule, TranslateModule, TooltipComponent],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class ProfileComponent implements OnInit {

    socialMediaItems = Profile.getSocialMediaItems();
    informationItems = Profile.getInformationItems();

    activeIndex = signal(0);
    private timer: any;

    ngOnInit(): void {
        this.startTimer();
    }

    ngOnDestroy(): void {
        this.stopTimer();
    }

    startTimer() {
        // Prevent starting multiple intervals
        this.stopTimer();
        this.timer = setInterval(() => {
            this.activeIndex.update(index => (index + 1) % this.informationItems.length);
        }, 3000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    goTo(index: number) {
        this.activeIndex.set(index);
    }
}
