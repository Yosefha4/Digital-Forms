export function ValidID(id) {
    if (id === undefined) return false;
    if (id.length === 9) {
      let ID = parseInt(id);
      if (isNaN(ID)) return false;
      let lastDigit = ID % 10;
      let flag = true;
      let sum = 0;
      ID /= 10;
      while (ID) {
        let digit = Math.floor(ID % 10);
        if (flag) {
          digit *= 2;
          if (digit > 9) {
            digit = (digit % 10) + Math.floor(digit / 10);
          }
        }
        sum += digit;
        ID /= 10;
        flag = !flag;
      }
      if (Math.floor(((Math.floor(sum / 10) + 1) * 10 - sum) % 10) === lastDigit) {
        return true;
      } else return false;
    } else return false;
  }