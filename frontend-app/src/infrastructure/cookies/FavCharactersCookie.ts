const COOKIE_KEY = "FavCharactersQueue";
const MAX_QUEUE_SIZE = 20;

export class FavCharactersCookie {
  private static getCookie(): string[] {
    if (typeof document === "undefined") return [];
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${COOKIE_KEY}=`));
    if (!cookie) {
      this.createIfNotExists();
      return [];
    }
    try {
      return JSON.parse(decodeURIComponent(cookie.split("=")[1])) as string[];
    } catch {
      return [];
    }
  }

  private static setCookie(queue: string[]) {
    const encoded = encodeURIComponent(JSON.stringify(queue));
    document.cookie = `${COOKIE_KEY}=${encoded}; path=/; max-age=1800`;
  }

  static createIfNotExists() {
    this.setCookie([]);
  }

  static setFavCharacter(name: string) {
    const queue = this.getCookie();
    if (queue.includes(name)) {
      this.remove(name, queue);
    } else {
      this.add(name, queue);
    }
  }

  static add(name: string, queue: string[]) {
    const updated = [name, ...queue].slice(0, MAX_QUEUE_SIZE);
    this.setCookie(updated);
  }

  static remove(name: string, queue: string[]) {
    const filteredQueue = queue.filter((item) => item !== name);
    this.setCookie(filteredQueue);
  }

  static isCharacterFav = (name: string) => {
    const queue = this.getCookie();
    if (queue.includes(name)) return true;
    return false;
  };

  static getAll() {
    return this.getCookie();
  }

  static clear() {
    document.cookie = `${COOKIE_KEY}=; path=/; max-age=0`;
  }
}
