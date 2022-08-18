import {v4} from "uuid"
export class course {
    constructor(
        public id: string = v4(),
        public courseTitle : string = "",
        public courseDuration: string = "",
        public courseContent: string = "",
        public isAvailable: boolean = false

    ) {}
}