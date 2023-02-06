export const ascNumberSort = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  } else {
    return a?.localeCompare(b);
  }
};

export const descNumberSort = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  } else {
    return b?.localeCompare(a);
  }
};

export const sortingDirectionsOptions = [
  { value: 'asc', name: 'По возрастанию' },
  { value: 'desc', name: 'По убыванию' },
];

export const statusFilterOptions = [
  { value: 'Ценитель красоты', name: 'Ценитель красоты' },
  { value: 'Поставщик аксессуаров', name: 'Поставщик аксессуаров' },
  { value: 'Конкурент минздрава', name: 'Конкурент минздрава' },
  { value: 'рыбак', name: 'рыбак' },
  { value: 'охотник', name: 'охотник' },
];

export const getMaxConfirmedOrders = (usersArr) => {
  const orders = usersArr.map((user) => user.confirmedOrders);

  return Math.max(...orders);
};

export const updateQueryParams = (href) => {
  window.history.pushState(null, null, href);
};
