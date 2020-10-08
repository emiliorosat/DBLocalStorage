'use strict'

let db = {
    data: [],
    key: "appData",
    GetData: function () {
        return this.data = JSON.parse(localStorage.getItem(this.key)) || this.data
    },
    Add: function (_new) {
        this.data.push(_new)
        this.Save()
    },
    Clear: function(){
        localStorage.clear()
        this.data = []
    },
    Update: function (element) {
        let item = this.FindBy(element['id'])
        let {index} = item
        this.data[index] = element
        this.Save()
    },
    Save: function(){
        localStorage.setItem(this.key, JSON.stringify(this.data))
    },
    FindBy: function (id, findBy = "id") {
        return this.data.find((e, i) => {
            if(e[findBy] == id) {
                e['index'] = i
                return e
            }
        })
    },
    Remove: function (id) {
        let { index } = this.FindBy(id)
        if (index !== -1) {
            this.data.splice(index, 1);
            this.Save()
        }
    },
}
