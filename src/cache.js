class Cache{
    #cache = [];

    constructor(){
    }

    set(key, value=null, count=1){
        this.#cache.push([key, value, count]);
    }

    get(key){
        for (var i = 0; i < this.#cache.length; i++) {
          if(this.#cache[i][0] == key){
              if(this.#cache[i][2] != 0){
                this.#cache[i][2] -= 1;
                return this.#cache[i][1];
              }
              else {
                return null;
              }
          }
        }
        return "key undefined";
    }
    getCount(key){
      for (var i = 0; i < this.#cache.length; i++) {
        if(this.#cache[i][0] == key){
            return this.#cache[i][2];
        }
      }
      return "key undefined";
    }
}
export {Cache}
