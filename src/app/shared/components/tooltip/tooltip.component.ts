import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tooltip',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
    @Input() text = '';
    @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';

    isVisible = false;

    show() {
        this.isVisible = true;
    }

    hide() {
        this.isVisible = false;
    }
}
