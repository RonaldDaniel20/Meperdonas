import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './meperdonas.component.html',
})

export class MePerdonas {
    yesButtonSize = 18;

    hacerGrande = () => {
        this.yesButtonSize += 10;
    }

    meHazPerdonado = () => {
        alert('!Gracias por perdoname!');
    }

}