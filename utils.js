const PIONEER = 'PIONEER';

export function setPioneer(pioneer) {
    const stringyPioneer = JSON.stringify(pioneer);
    localStorage.setItem(PIONEER, stringyPioneer);
}

export function getPioneer() {
    const stringyPioneer = localStorage.getItem(PIONEER);
    return JSON.parse(stringyPioneer);
}