const local = (name, object = null, item = '') => {

  const data = localStorage.getItem(name) !== null
  ? JSON.parse(localStorage.getItem(name))
  : [];

  if (object !== null) {
    const storeData = JSON.stringify(object);
    localStorage.setItem(name, storeData);
  };

  if (item !== '') {
    data.push(item);
    const storeData = JSON.stringify(data);
    localStorage.setItem(name, storeData);
  };

  return data;
}

export default local;