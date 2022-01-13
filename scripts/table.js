import { PositionHelper } from './utils.js';

/**
 * The Ping Pong table as a object.
 */
class Table extends PositionHelper {
    constructor(id) {
        super(id, false);
    }
}

export { Table };