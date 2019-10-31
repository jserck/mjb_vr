(function des(win) {
    const des = {
        setDAesString: function (data, keys) {
            // let baseTen = res.data.slice(0,10);
            // let baseThree = res.data.slice(30,res.data.length);
            // let base64Str = baseTen + baseThree;
            //私钥
            let key = CryptoJS.enc.Utf8.parse(keys);
            let iv = CryptoJS.enc.Utf8.parse(keys);
            // Triple DES 加密
            let encrypted = CryptoJS.TripleDES.encrypt(data, key, {
                iv: iv,
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            //                转换为字符串
            encrypted = encrypted.toString();
            return encrypted;
        },
        // getDAesString: function (res, keys) {
        //     // console.log(res.data);

        //     let baseTen = res.data.slice(0, 10);
        //     let baseThree = res.data.slice(30, res.data.length);
        //     let base64Str = baseTen + baseThree;
        //     //私钥
        //     let key = CryptoJS.enc.Utf8.parse("yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
        //     let iv = CryptoJS.enc.Utf8.parse("yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
        //     // Triple DES 加密
        //     //               var encrypted = this_.$CryptoJS.TripleDES.encrypt(str, key, {
        //     //                 iv: iv,
        //     //                 mode: this_.$CryptoJS.mode.ECB,
        //     //                 padding: this_.$CryptoJS.pad.Pkcs7
        //     //               });
        //     //
        //     ////                转换为字符串
        //     //               encrypted = encrypted.toString();
        //     //               console.log(encrypted);
        //     // Triple DES 解密
        //     //               let encrypted='U2FsdGVkX19qa+f0Zw2OqgVV8zBTK3lSLjhfmIaufMk=';
        //     let decrypted = CryptoJS.TripleDES.decrypt(base64Str, key, {
        //         iv: key,
        //         mode: CryptoJS.mode.ECB,
        //         padding: CryptoJS.pad.Pkcs7
        //     });
        //     // 转换为 utf8 字符串
        //     return decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
        // },
        urlMd5(url) {
            let timer = new Date().getTime().toString();
            let str = `WEB${timer}XZ_PQ`;
            let keys = "xqpq!d%sd*aw%dGHJJHsa#mng~dsqvr";
            let ori = window.location.origin;
            var timestamp = this.setDAesString(
                str,
                keys
            );
            timer = new Date().getTime().toString();
            var newTimestamp = this.setDAesString(
                timer,
                keys
            );
            let desStr = timestamp.substring(0, 15) + newTimestamp.substring(0, 10) + timestamp.substring(15);
            if (/http/.test(ori)) {
                return `${url}&d=${desStr}`;
            }
            return `${window.location.origin + url}&d=${desStr}`;
        }
    };
    win._des = des;
})(window);