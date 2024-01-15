const categories = document.querySelector('#categories');

const categoryCount = categories.querySelectorAll('.item').length;
console.log(`Кількість категорій: ${categoryCount}`);

categories.querySelectorAll('.item').forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;

  const categoryItemsCount = category.querySelectorAll('li').length;

  console.log(`Категорія: ${categoryTitle} `);
  console.log(`кількість елементів: ${categoryItemsCount}`);
});
