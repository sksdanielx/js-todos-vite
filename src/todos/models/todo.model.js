
import { v4 as uuid } from 'uuid';

export class Todo {

    /**
     * Crea una nueva instancia
     * @param {String} description 
     */
    constructor(description) {

        this.id = uuid()
        this.description = description
        this.done = false
        this.createAdt = new Date()

    }

}