const getElement = (id) => document.getElementById(id);

const isLeap = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
};

getElement("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const year = getElement("input").value.toString();
  const resultElement = getElement("result");
  resultElement.innerHTML = isLeap(year);
});
