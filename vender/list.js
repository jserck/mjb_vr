let vm = new Vue({
    el: '#app',
    data() {
        return {
            subList: []
        }
    },
    created() {
        this.addPopState();
        this.getHttp();
    },
    mounted() {
        this.$nextTick(() => {
            this.swipeLeft();
        });
    },
    methods: {
        removePopstate() {
            if (window.removeEventListener) {
                window.removeEventListener('popstate', function popStateHandler(e) {
                    window.location = './index.html';
                });
            } else {
                window.detachEvent('onpopstate', function popStateHandler(e) {
                    window.location = './index.html';
                });
            }
            console.log('..删除事件监听');
        },
        addPopState() {
            let referrerUrl = /143\/jd\//g;
            let sateObj = null;
            console.log(document.referrer, referrerUrl.test(document.referrer));
            if (document.referrer == '' || referrerUrl.test(document.referrer)) {
                stateObj = {
                    title: 'title',
                    url: '#'
                }
                window.history.pushState(sateObj, 'title', '#');
                if (window.addEventListener) {
                    window.addEventListener('popstate', function popStateHandler(e) {
                        window.location = './index.html';
                    });
                } else {
                    window.attachEvent('popstate', function popStateHandler(e) {
                        window.location = './index.html';
                    });
                }
                console.log('..添加事件监听');
            }
        },
        getHttp() {
            let self = this;
            $.ajax({
                url: "./json/jd.json", //json文件位置
                type: "GET", //请求方式为get
                dataType: "json", //返回数据格式为json
                success: function(res) { //请求成功完成后要执行的方法
                    let resData = res.response.data.obj.subList;
                    let num = Math.ceil(resData.length / 9);
                    for (let i = 0; i < num; i++) {
                        let [...arr] = resData.length >= 9 ? resData.splice(0, 9) : resData.splice(0, resData.length);
                        self.subList.push(arr);
                    }
                }
            });
        },
        linkList(webUrl) {
            this.removePopstate();
            window.location = `./cr.html?ifr=${_des.urlMd5(webUrl)}`;
        },
        swipeLeft() {
            $("#g-carousel").carousel({
                interval: false
            });
            var myTouch = util.toucher(document.getElementById('g-carousel'));
            myTouch.on('swipeRight', function() {
                $('.carousel').carousel('prev')
            }).on('swipeLeft', function() {
                $('.carousel').carousel('next')
            });

        }
    }
});