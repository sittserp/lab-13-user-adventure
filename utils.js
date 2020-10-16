const PIONEER = 'PIONEER';

export function setPioneer(pioneer) {
    const stringyPioneer = JSON.stringify(pioneer);
    localStorage.setItem(PIONEER, stringyPioneer);
}

export function getPioneer() {
    const stringyPioneer = localStorage.getItem(PIONEER);
    return JSON.parse(stringyPioneer);
}

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const myID = someArray[i];
        if (myID.id === someId) {
            return myID;
        }
    }
}