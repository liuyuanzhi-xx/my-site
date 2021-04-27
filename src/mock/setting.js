import Mock from "mockjs"
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
        siteTitle: "我的个人空间",
        icp: "黑ICP备17001719号",
        info: [{
                name: "gitHub",
                text: "liuyuanzhi-xx",
                linkTo: 'https://github.com/DuYi-Edu',
            },
            {
                name: "qq",
                text: '1249184952',
                linkTo: '',
                qrCode: 'http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png'
            }, {
                name: "weixin",
                text: 'xxxxx',
                linkTo: '',
                qrCode: 'http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png'
            }, {
                name: "email",
                text: 'email',
                linkTo: ''
            }
        ]
    },
})