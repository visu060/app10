import { Component } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
    selector : 'app-warning',
    template :`
    <p> this is warning message from my side </p>
    `,
    styles: [`
    p{
        padding : 20px;
        color: red;
        background-color: mistyrose;
        border: 1px solid red;
    }
    
    `],
})

export  class WarningComponent{}