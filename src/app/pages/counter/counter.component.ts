import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './counter.component.html',
})

export class CounterComponent {

    count = signal(0); 

    isEven = computed(() => this.count() % 2 === 0);

    increment = () => this.count.update((value) => value + 1);
    decrement = () => this.count.update((value) => value - 1);
    reset = () => this.count.set(0);

}