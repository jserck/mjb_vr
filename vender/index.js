let vm = new Vue({
    el: '#app',
    data: {
        message: 'hellow  vue'
    },
    created() {

    },
    methods: {
        getDataList() {

        },
        linkList() {
            window.location = 'list.html';
        },
        linkVr(webUrl) {
            let src = '/Data/HtmlData/143/vr_huwai/html/index.html?';
            window.location = `./cr.html?ifr=${_des.urlMd5(src)}`;
        }
    }
});