import { Component, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tooltip',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tooltip.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
    @Input() text = '';
    @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';

    isVisible = false;
    calculatedPosition = this.position;

    constructor(private el: ElementRef) { }

    show() {
        this.isVisible = true;
        this.calculatePosition();
    }

    hide() {
        this.isVisible = false;
    }

    private calculatePosition() {
        // Reset to desired input first
        this.calculatedPosition = this.position;

        setTimeout(() => {
            const hostElement = this.el.nativeElement;
            const tooltipBox = hostElement.querySelector('.tooltip-box');
            if (!tooltipBox) return;

            const rect = tooltipBox.getBoundingClientRect();

            // If preferred position is bottom but overflows bottom viewport
            if (this.position === 'bottom' && rect.bottom > (window.innerHeight - 10)) {
                this.calculatedPosition = 'top';
            }
            // If preferred position is top but overflows top viewport
            else if (this.position === 'top' && rect.top < 10) {
                this.calculatedPosition = 'bottom';
            }
        });
    }
}
