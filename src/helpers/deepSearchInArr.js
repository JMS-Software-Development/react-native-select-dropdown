const contains = (item, searchTxt) => {
  // item is an object
  // anansi custom change => only search title field
  if (typeof item == 'object' && item != null) {
      const value = item.title;
      if (contains(value, searchTxt)) {
        return true;
      }
  }
  // string, number or boolean
  if (typeof item != 'object' && item != null && item != undefined) {
    const itemStringfied = item.toString().toLowerCase();
    const searchTxtStringfied = searchTxt.toString().toLowerCase();
    if (itemStringfied.includes(searchTxtStringfied)) {
      return true;
    }
  }
  return false;
};

export const deepSearchInArr = (query, arr) => {
  let array = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (contains(arr[i], query)) {
      array.push(arr[i]);
    }
    if (i == arr.length - 1) {
      return array;
    }
  }
};
