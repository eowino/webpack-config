export const add = (a, b) => a + b;

export const numbers = () => Promise.resolve([1,5]);

export const createDiv = (html = '') => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div;
};