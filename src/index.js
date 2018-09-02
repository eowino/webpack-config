import { add, numbers, createDiv } from './utilities/utilities';

const logNumbers = async () => {
  const result = await numbers();

  for (let value of result) {
    const res = add(30, value);
    document.body.appendChild(createDiv(res))
    console.log(res);
  }
};

window.onload = () => logNumbers();