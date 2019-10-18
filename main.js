var VueInstance = new Vue({
    el: ".app",
    data: {
        title: "Dien thoai SamSung"
    },
    methods: {
        say: function(text){
            return 'Hello'   +   text;
        }
    }
});
