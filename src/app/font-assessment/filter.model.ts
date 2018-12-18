export class Filter {

    constructor(
        public id?: number,
        public name?: string,
        public selected?: boolean
    ) {
        this.selected = false;
    }

}