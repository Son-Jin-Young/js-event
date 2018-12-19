class Model {
    constructor () {
        this._name = '';
        this._list = [];

        addEventListener('addListModel', (event) => {
            this.addListModel(event.detail);
        });

        addEventListener('removeListModel', (event) => {
            this.removeListModel(event.detail);
        });
    }

    get name () {
        return this._name;
    }

    set name (value) {
        this._name = value;
    }

    addListModel (model) {
        const findIdx = this._list.findIndex((item) => item === model.name);

        if (findIdx > -1) {
            console.log('Exist name value.');
        } else {
            this._list.push(model.name);
            console.log('Add name in list', this._list);
        }
    }

    removeListModel (model) {
        const findIdx = this._list.findIndex((item) => item === model.name);

        if (findIdx > -1) {
            this._list.splice(findIdx, 1);
            console.log('Remove name in list', this._list);
        } else {
            console.log('Not found in list');
        }
    }
}