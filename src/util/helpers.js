class helpers {
    static getLastNDays(n) {
      const currentDate = new Date();
      const daysArray = [];
  
      for (let i = 1; i < n; i++) {
        const previousDate = new Date(currentDate);
        previousDate.setDate(currentDate.getDate() - i);
  
        const year = previousDate.getFullYear();
        const month = (previousDate.getMonth() + 1).toString().padStart(2, '0');
        const day = previousDate.getDate().toString().padStart(2, '0');
  
        const formattedDate = `${year}-${month}-${day}`;
        daysArray.unshift(formattedDate); // Add to the beginning of the array
      }
  
      return daysArray;
    }

    static getDateNDaysAgo(n) {
      const currentDate = new Date();
      const previousDate = new Date(currentDate);
      previousDate.setDate(currentDate.getDate() - n);
  
      const year = previousDate.getFullYear();
      const month = (previousDate.getMonth() + 1).toString().padStart(2, '0');
      const day = previousDate.getDate().toString().padStart(2, '0');
  
      return `${year}-${month}-${day}`;
    }
  }
  
  export default helpers;
  