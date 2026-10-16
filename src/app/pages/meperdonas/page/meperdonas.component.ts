import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './meperdonas.component.html',
})

export class MePerdonas {
    yesButtonSize = signal(18);
    visible = signal(true);

    hacerGrande = () => {
        this.yesButtonSize.set(this.yesButtonSize() + 10);
    }

    meHazPerdonado = () => {
        alert('!Gracias por perdoname!');
        this.visible.set(false);
    }

}