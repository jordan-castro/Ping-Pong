/**
 * Convert a position object to a readable string. 
 * 
 * @param {object} position 
 */
 const getReadablePosition = (position) => {
    return `${position.x} ${position.y} ${position.z}`;
};

/**
 * Convert a readable string to a position object.
 * 
 * @param {string} position
 * 
 * @returns {object}
 */
const getPositionFromString = (position) => {
    // Split the string by " "
    const positionArray = position.split(' ');
    // Return an object with the x, y, and z values.
    return {
        x: parseFloat(positionArray[0]),
        y: parseFloat(positionArray[1]),
        z: parseFloat(positionArray[2]),
        isVector3: true
    };
};

/**
 * Class that gives access to the Position of an entity.
 */
class PositionHelper {
    constructor(id, isDynamic) {
        this.el = document.querySelector(`#${id}`);
        this._isDynamic = isDynamic;
        this.isCurrentlyDynamic = isDynamic;

        this.dynamicString = null;
    }

    /**
     * Get the current position of the entity.
     * 
     * @returns {object}
     */
    getPosition() {
        return this.el.object3D.position;
    }

    /**
     * Set the position of the entity.
     * 
     * @param {string | object} position
     */
    setPosition(position) {
        // Disable if needed
        if (this._isDynamic) {
            this.disableDynamicPhysics();
        }
        let pos = position;
        // Check if the position is a string
        if (typeof position === "string") {
            pos = getPositionFromString(position);
        }

        this.el.object3D.position.set(pos.x, pos.y, pos.z);
        // Enable if needed
        if (this._isDynamic) {
            this.enableDynamicPhysics();
        }
    }

    /**
     * Disable dynamic-body
     */
    disableDynamicPhysics() {
        this.el.removeAttribute('dynamic-body');
        this.isCurrentlyDynamic = false;
    }

    /**
     * Enable dynamic-body
     */
    enableDynamicPhysics() {
        this.el.setAttribute('dynamic-body', this.dynamicString);
        this.isCurrentlyDynamic = true;
    }
}

export { getReadablePosition, getPositionFromString, PositionHelper };