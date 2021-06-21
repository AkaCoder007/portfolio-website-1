const thisExample = {
    name: "ANil",
    thisfunc: function() {
        console.log(this); //refers to this object
    },

    thisfunc: () => (console.log(this)) //refers to empty object
};
thisExample.thisfunc(); ///refers to current object