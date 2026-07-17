import { ChangeDetectionStrategy, Component, type OnInit, signal } from '@angular/core';
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
export class ProfileComponent implements OnInit {

    socialMediaItems = Profile.getSocialMediaItems();
    informationItems = Profile.getInformationItems();

    activeIndex = signal(0);
    isTransitioning = signal(true);
    private startTime = 0;
    private remainingTime = 3000;
    private timeoutId: any;

    ngOnInit(): void {
        this.startNextSlideTimer(3000);
    }

    ngOnDestroy(): void {
        this.stopTimer();
    }

    startNextSlideTimer(delay = 3000) {
        this.stopTimer();
        this.startTime = Date.now();
        this.remainingTime = delay;
        this.timeoutId = setTimeout(() => {
            this.isTransitioning.set(true);
            this.activeIndex.update(index => index + 1);

            // If we've slid to the first cloned element, snap back silently after transition
            if (this.activeIndex() === this.informationItems.length) {
                setTimeout(() => {
                    this.isTransitioning.set(false);
                    this.activeIndex.set(0);
                }, 500); // Wait for the 0.5s CSS transition to finish
            }

            // Start the next slide with full 3s delay
            this.startNextSlideTimer(3000);
        }, delay);
    }

    startTimer() {
        this.startNextSlideTimer(this.remainingTime);
    }

    stopTimer() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
            const elapsed = Date.now() - this.startTime;
            this.remainingTime = Math.max(0, this.remainingTime - elapsed);
        }
    }

    goTo(index: number) {
        this.isTransitioning.set(true);
        this.activeIndex.set(index);
        this.startNextSlideTimer(3000);
    }
}
