const isBrowser = typeof window !== "undefined";

const customStorage = {
  getItem: (key: string) => {
    return new Promise((resolve, reject) => {
      if (!isBrowser) {
        resolve(null);
        return;
      }
      try {
        const value = localStorage.getItem(key);
        resolve(value);
      } catch (error) {
        reject(error);
      }
    });
  },
  setItem: (key: string, value: string) => {
    return new Promise((resolve, reject) => {
      if (!isBrowser) {
        resolve(null);
        return;
      }
      try {
        localStorage.setItem(key, value);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  },
  removeItem: (key: string) => {
    return new Promise((resolve, reject) => {
      if (!isBrowser) {
        resolve(null);
        return;
      }
      try {
        localStorage.removeItem(key);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default customStorage;
