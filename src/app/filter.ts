export enum FilterOpt {
    DEALS,
    ALL,
    QUERY
}

export class Filter {
    constructor(
        public opt: FilterOpt = FilterOpt.ALL, 
        public search: string = "") {}
}
