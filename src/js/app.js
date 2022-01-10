'use strict';

export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    add(code, errMessage) {
        this.errors.set(code, errMessage);
    }

    translate(code) {
        let text = null;
        if (this.errors.has(code)) {
            text = this.errors.get(code);
        } else {
            text = 'Unknown error!';
        }
        return text;
    }
}