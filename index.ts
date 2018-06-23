import { STATUS_CODES } from 'http';

function invertGeneric (object, cb) {
    const newObject = {};
    
    for (const key in object) {
        let label = object[key]
            .toUpperCase();
        label = label.replace(/[\s']/g, '_');
        
        newObject[label] = cb(key);  
    }
    
    return newObject;
}

export default {
    CODES: invertGeneric(STATUS_CODES, (k) => Number(k)) as { [key: string]: number; },
    MESSAGES: invertGeneric(STATUS_CODES, (k) => STATUS_CODES[k]) as { [key: string]: string; },
    STATUS: STATUS_CODES as { [key: number]: string; },
};