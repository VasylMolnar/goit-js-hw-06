const categoriesList = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesList.childElementCount}`);

[...categoriesList.children].forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelector('ul').childElementCount}`);  
});
