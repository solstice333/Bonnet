export class FilterOpt {
    static DEALS: number = 0
    static ALL: number = 1
    static QUERY: number = 2
}

export class Filter {
    constructor(
        public opt: FilterOpt = FilterOpt.ALL, 
        public search: string = "") {}
}
