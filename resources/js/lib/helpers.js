Object.defineProperty(Array.prototype, 'tap', {
    value: function(callback) {
        if (this.length) {
            callback(this);
        }

        return this;
    },
});

Object.defineProperty(Array.prototype, 'indexOfById', {
    value: function(id) {
        if (!id) {
            throw 'Please enter id you are looking for'
        }
        return this.map(i => {
                if (!i.hasOwnProperty('id')) {
                  throw 'Child objects don\'t contain id property'
                }
                return i.id
            }).indexOf(id)
        }
});
