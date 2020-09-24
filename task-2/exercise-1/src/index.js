const ABC_REGEX = /([a-z])(?!.*\1)/g;

const getElement = (id) => document.getElementById(id);

// Works for english language
const isPangram = (str) => {
  return str.match(ABC_REGEX).length === 26;
};

getElement("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const str = getElement("input").value;
  const resultElement = getElement("result");
  resultElement.innerHTML = isPangram(str);
});
