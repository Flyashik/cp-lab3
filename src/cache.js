class Cache{
    #cache = [];
    #statistics = [];
    constructor(){
    }

    maybeClear(element){
      if(element.count == 0){
        this.#cache.pop(element);
      }
    }

    set(key, value=null, count=1){
      let hasKey = this.#cache.find(element => element.key == key);
      if(hasKey == undefined)
      {
        this.#cache.push({key: key, value: value, count: count});
        this.#statistics.push('Set ${key} : ${value}. HitsAmount: ${count}');
      }
      else {
        if(hasKey.count != 0){
          hasKey.value = value;
          hasKey.count -= 1;
        }
      }
    }

    get(key){
      let hasKey = this.#cache.find(element => element.key == key);
      if(hasKey == undefined){
        return 'Element with this key not found.';
      }
      else {
        if(hasKey.count != 0){
          hasKey.count -= 1;
          this.#statistics.push('Get ${key} : ${value}. HitsAmount: ${count}');
          return hasKey.value;
        }
        else{
          return null;
        }
      }
    }
    getCount(key){
      let hasKey = this.#cache.find(element => element.key == key);
      if(hasKey == undefined){
        return 'Element with this key not found.';
      }
      else {
        return hasKey.count;
      }
    }
}
export {Cache}
