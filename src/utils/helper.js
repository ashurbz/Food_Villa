

export  function filterData(allResta, searchText) {
    const filterData = allResta.filter((data) => {
      return data.data.name.toLowerCase().includes(searchText.toLowerCase());
    });

    return filterData;
  }