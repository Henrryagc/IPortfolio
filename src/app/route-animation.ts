import {
    trigger,
    query,
    animate,
    transition,
    style    
} from '@angular/animations'


export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave',[
            style({
                position: 'absolute',
                left: 0,
                with: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)'
            })
        ]),
        query(':enter, :leave', /*{ optional: true },*/ [
            animate('600ms ease',
                style({
                    opacity:1,
                    transform: 'scale(1) translateY(0)'
                })
            )
        ])
    ])
]) 