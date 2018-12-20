export class Filter {

    constructor(
        public id?: number,
        public name?: string
    ) {
    }

}

export class ActiveFilter {

    constructor(
        public id?: number,
        public filter?: Filter,
        public textoToSearch?: string
    ) {
    }

}