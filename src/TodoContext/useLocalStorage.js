import React from 'react';

//Custom hook useLocalStorage
function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        //Local storage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
          }

        setItem(parsedItem);  
        setLoading(false);
        // throw new Error();
      } catch(error) {
        setError(true);
      }
      
    }, 3000)
  });
  

  //Make local storaged data it's show in state
  const saveItem = (item) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(item));
      setItem(item);
    } catch(error) {
      setError(true);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }

}

export { useLocalStorage };