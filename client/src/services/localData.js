const LOCAL_COLLECTION = 'telcomData';

const getStorage = () => {
  const storage = localStorage.getItem(LOCAL_COLLECTION);
  return storage ? JSON.parse(storage) : { sold: [] };
};

export const saveLocalData = (obj) => {
  const stringData = JSON.stringify(obj);
  localStorage.setItem(LOCAL_COLLECTION, stringData);
};

export const setAvailability = (number) => {
  const storage = localStorage.getItem(LOCAL_COLLECTION);
  const localData = storage ? JSON.parse(storage) : { sold: [] };
  const { sold } = localData;

  if (sold.filter((el) => el.value === number.value).length === 0) {
    sold.push(number);
  }
  saveLocalData({ ...localData, sold });
};

export const checkAvailability = ({ value: num }) => {
  const { sold } = getStorage();
  return sold.filter((el) => el.value === num).length === 0;
};
