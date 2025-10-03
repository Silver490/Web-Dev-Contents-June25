/* Javascript Leetcode 30 days

2622. Cache With Time Limit

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.  */

// solution 1

var TimeLimitedCache = function () {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
    // if the key is already present in the cache
    let isBombActive = this.cache.has(key);
    if (isBombActive) {
        // we clear the previous setInterval
        let currentBombTimer = this.cache.get(key).bombTimer;
        clearTimeout(currentBombTimer);
        // and we will set a new setInterval
    }
    // initially we set the setInterval for the key present in the cache
    this.cache.set(key, {
        value,
        // after the duration we delete the key from the cache
        bombTimer: setTimeout(() => {
            this.cache.delete(key);
        }, duration),
    });

    return isBombActive;
};

TimeLimitedCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        return this.cache.get(key).value
    }
    return -1;
};

TimeLimitedCache.prototype.count = function () {
    return this.cache.size;
};
