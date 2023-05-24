const Videos = [
    // {
    //     id: 1,
    //     video: new URL("https://www.youtube-nocookie.com/embed/Ite9EVt26Ko"),
    //     channelLogo: new URL("https://yt3.ggpht.com/nMSajqYD5Abcyaf7duHp_FqZ0gYJMivBUlh9Wwv51G_Bs0vvk48eIeLFTvEc1Y96Cm1AwpAV=s68-c-k-c0x00ffffff-no-rj"),
    //     title: "Bolo Zubaan Kesari | Harsh Gujral | Standup Comedy 2022 | Youtube Reborn | #harshgujral #thehabitat",
    //     channelName: "The Laugh Store",
    //     channelViewsTime: "485k views . 11months ago"
    // },
    {
        id: 2,
        video: new URL("https://www.youtube.com/embed/tIx07Iz_yIU"),
        channelLogo: new URL("https://yt3.ggpht.com/ytc/AGIKgqNPX_XJnvoW_vy_auilnXOlJJfxG-VkmadBGAZv8g=s68-c-k-c0x00ffffff-no-rj"),
        title: "Russia Ukraine War Update: रूस के जंगी जहाजों का दम, यूक्रेन नाटो में मचा हड़कंप | Pacific Fleet",
        channelName: "News Nation",
        channelViewsTime: "2.5K views . 1 hour ago"
    },
    {
        id: 3,
        video: new URL("https://www.youtube.com/embed/H9COeg_z9EM"),
        channelLogo: new URL("https://yt3.ggpht.com/jQUu_4ddW9fO3znuwaB4EqoFbp9uWC863j3i3Lkredqgu3XLiljU_0Kvup-qxdGqKrgX5T74=s88-c-k-c0x00ffffff-no-rj"),
        title: "O Re Piya Music Break Down with Salim-Sulaiman | Rahat Fateh Ali Khan | Mashable Todd-Fodd | EP 04",
        channelName: "Mashable India",
        channelViewsTime: "27K views . 1 day ago"
    },
    {
        id: 4,
        video: new URL("https://www.youtube.com/embed/UTMh-_wh1xE"),
        channelLogo: new URL("https://yt3.ggpht.com/ytc/AGIKgqMMImwyEw4sMOz27n3Pe0PCVLFZ_fmAO-9W-E8AsA=s88-c-k-c0x00ffffff-no-rj-mo"),
        title: "Hood Famous ( Official Video ) | Navaan Sandhu | Lejend | Teji Sandhu | New Punjabi songs 2023",
        channelName: "Navaan Sandhu",
        channelViewsTime: "9.7M views . 2 months ago"
    },
    // {
    //     id: 5,
    //     video: new URL("https://www.youtube.com/embed/A_5odl_fn34"),
    //     channelLogo: new URL("https://yt3.ggpht.com/cHlczmcvsdQ92wd_JNFfz4XwMylYCdglRgTeteVNgHZOCoR1jc2RFyR_RRI2Mn9ZMxIhxj41ZA=s88-c-k-c0x00ffffff-no-rj"),
    //     title: "LEVELS - Official Video | Sidhu Moose Wala ft Sunny Malton | The Kidd",
    //     channelName: "Sidhu Revolter",
    //     channelViewsTime: "76K views . 1 day ago"
    // },
    {
        id: 6,
        video: new URL("https://www.youtube.com/embed/TLKxdTmk-zc"),
        channelLogo: new URL("https://yt3.ggpht.com/ytc/AGIKgqMmsR23C_lpoQiwsixqAo9aC6SdT-JxZJ9NGtHBpA=s88-c-k-c0x00ffffff-no-rj"),
        title: "The Most Eye Opening 10 Minutes Of Your Life | David Goggins",
        channelName: "Motivation Madness",
        channelViewsTime: "14M views . 3 years ago"
    },
    {
        id: 7,
        video: new URL("https://www.youtube.com/embed/14euSE4bGNs"),
        channelLogo: new URL("https://yt3.ggpht.com/qRQ8KKGGxlP9uemZw9WbBkesyXSnnHdWlm3K5eQvkXKUL15aNuTefXOaUu00OJl7jfo-AGWqFw=s88-c-k-c0x00ffffff-no-rj"),
        title: "What Makes Hanuman Chalisa So POWERFUL - Tantric Explains",
        channelName: "TRS Clips",
        channelViewsTime: "2.4M views . 3 months ago "
    },
    {
        id: 8,
        video: new URL("https://www.youtube.com/embed/Dt3o4l_OFa0"),
        channelLogo: new URL("https://yt3.ggpht.com/ytc/AGIKgqN8GgrkGaaRTY5ekdsoAALXvJQaMzGP71b4RTjmJQ=s88-c-k-c0x00ffffff-no-rj"),
        title: "React JS 8 Hour Bootcamp (Learn Redux, React JS, Styled Components) | LIVE",
        channelName: "Clever Programmer",
        channelViewsTime: "96K views . Streamed 1 year ago"
    },
    {
        id: 9,
        video: new URL("https://www.youtube.com/embed/whuD6h11yZI"),
        channelLogo: new URL("https://yt3.ggpht.com/_FmN-rgQ1Wkp9j9xDBbcPHCq5p7pSutDh_QP-CfOz8LPTrYhnWHmDoucvtz7BXy34wsdVu5uZA4=s88-c-k-c0x00ffffff-no-rj"),
        title: "Kapil की बातों से Dr. Gulati क्यों हुए भावुक? | The Kapil Sharma Show | Journey Of Kapil Sharma",
        channelName: "SET India",
        channelViewsTime: "3.4M views . 1 year ago"
    },
    {
        id: 10,
        video: new URL("https://www.youtube.com/embed/HVjjoMvutj4" ),
        channelLogo: new URL("https://yt3.ggpht.com/R533_jcM4sMZgviMpL7kzbmBHE3zWUu56sHJ8euP34q6TLm52-fBNaXM21ylUJiLO1rWYTe8wQ=s88-c-k-c0x00ffffff-no-rj"),
        title: "Web Development Complete Course [30 Hours] | Learn Full Stack Web Development From Basic",
        channelName: "WsCube Tech",
        channelViewsTime: "980K views . 3 months ago"
    },
    {
        id: 11,
        video: new URL("https://www.youtube.com/embed/zM61WQ4yxDg"),
        channelLogo: new URL("https://yt3.ggpht.com/U-V85n2MvoR95VezKjJjpTPRFsKf1G_tdznDjtdxaYdDO7x45WbLmQP1dcqP381H-gEhZtU8EA=s88-c-k-c0x00ffffff-no-rj"),
        title: "Surprising our student with 10+ LPA job! | Palakonda Rathan Sai's Success journey",
        channelName: "AccioJob",
        channelViewsTime: "73 views . 46 minutes ago"
    },
    {
        id: 12,
        video: new URL("https://www.youtube.com/embed/W6Ys05Cw2c0" ),
        channelLogo: new URL("https://yt3.ggpht.com/YCydQqCbgvLPzC3msqk6o6sYB4jk4UeBazkKUPcji-CDmD5C8MkEC916QA4Bn-95lKHfu1BW=s88-c-k-c0x00ffffff-no-rj"),
        title: "Itni Charbi Hain To 5 Star Hotel Mein Chai Kyu Nahi Pita | Phir Hera Pheri Akshay Kumar Rajpal Yadav",
        channelName: "Ajay और Akshay",
        channelViewsTime: "3M views . 7 months ago "
    },
    {
        id: 13,
        video: new URL("https://www.youtube.com/embed/2qS2o0fQ8zM"),
        channelLogo: new URL("https://yt3.ggpht.com/sIArgExYMeC2UvnfRdpG1ZTUTtipvsYgPI5ZIwbq7nq-Q2rzHTCO0NZrMqxxo6jTDprBUneF=s88-c-k-c0x00ffffff-no-rj"),
        title: "coherence l spatial coherence l visibility, measure of coherence l Engineering physics l B. Sc,M. Sc",
        channelName: "Chemistry by Avani",
        channelViewsTime: "44 views . 3 hours ago"
    },
    {
        id: 14,
        video: new URL("https://www.youtube.com/embed/q5G0VQ9_S_Y"),
        channelLogo: new URL("https://yt3.ggpht.com/ytc/AGIKgqOGuIOhnvwli8qtSUHuWX5GyBE7WdGK5P6t6HC0=s88-c-k-c0x00ffffff-no-rj"),
        title: "POWERFUL SHIVA mantra to remove negative energy - Shiva Dhyana Mantra (Mahashivratri Chant) - 3 hrs",
        channelName: "Mahakatha - Meditation Mantras",
        channelViewsTime: "3.8M views . Streamed 3 months ago"
    },
    {
        id: 15,
        video: new URL("https://www.youtube.com/embed/qUxbmHw8NpM"),
        channelLogo: new URL("https://yt3.ggpht.com/vZFILuFswtjUIU5oRCc79rxRdML5A_c-D_6AdvgAAd0hqSrJihyJFkT_CTSjYwSrHgiPAAozebY=s88-c-k-c0x00ffffff-no-rj"),
        title: "CM Yogi का बदला, पूरी दुनिया हैरान | Yogi Adityanath Crying in Parliament| Atiq Ahmed Live Update",
        channelName: "Zee News",
        channelViewsTime: "1.3M views . 12 hours ago"
    },
    {
        id: 16,
        video: new URL("https://www.youtube.com/embed/3CwShYEA0ao"),
        channelLogo: new URL("https://yt3.ggpht.com/MehoWv8wE9h6ptkL1vmRKhjDNKq2HvDcDRucCF9IPyl8-8LqR83OD1G2Oa1T64mAKGDa3zSS=s88-c-k-c0x00ffffff-no-nd-rj"),
        title: "Wiz Khalifa - Love To Smoke [Official Music Video]",
        channelName: "Wiz Khalifa",
        channelViewsTime: "3.2M views . 3 months ago"
    },
    {
        id: 17,
        video: new URL("https://www.youtube.com/embed/XWePdlCGTno"),
        channelLogo: new URL("https://yt3.ggpht.com/-_FTSyScD8TqmEwaOdAqOY_fmOLkvCgR1MyzrDGpdcOmWewKkytSqRMrVr5uHoMXyfKi6Kmd=s88-c-k-c0x00ffffff-no-rj"),
        title: "How To Make Youtube Clone in ReactJS | Youtube Api | Youtube Clone",
        channelName: "Caffeine Code",
        channelViewsTime: "2.8K views . 10 months ago"
    },
    {
        id: 18,
        video: new URL("https://www.youtube.com/embed/pxCWiYFkvTg"),
        channelLogo: new URL("https://yt3.ggpht.com/ytc/AGIKgqPlQ5gnbf9f8tHzcnhZW041AwZSQVJlbTHn1WZp=s88-c-k-c0x00ffffff-no-rj-mo"),
        title: "Brodha V - Aathma Raama [Music Video]",
        channelName: "Brodha V",
        channelViewsTime: "39M views . 10 years ago"
    },
    {
        id: 19,
        video: new URL("https://www.youtube.com/embed/en0asbx3mD0"),
        channelLogo: new URL("https://yt3.ggpht.com/bjK1nBpvlXfOQ4Jh3P22aCKsG3vnVGEAlBx1TpiNLb0W78MVwKME_aMdhXaKj-XiyUERAh5ENg=s88-c-k-c0x00ffffff-no-rj"),
        title: "तू ही माता तू ही पिता है । KÂLÎKÂ BØY ẞØÑG #youtube #rambhajan #rambhakt",
        channelName: "KÂLÎKÂ BØY ẞØÑG",
        channelViewsTime: "72 views . 11 hours ago"
    },
    {
        id: 20,
        video: new URL("https://www.youtube.com/embed/OV8JefQ18hk"),
        channelLogo: new URL("https://yt3.ggpht.com/I08fVxvfQFl-qeA5mZWstWkiBVhhfRfG6Li4THN3K-qmNnvcGk2Nbfr-d87J_6akqhVAS_T_eZg=s88-c-k-c0x00ffffff-no-rj"),
        title: "Bhajaman Radhe Govinda || Acyuta Gopi Devi Dasi || भजमन राधे गोविंद || bhajman radhe govind ||",
        channelName: "Bhajans & Music Channel",
        channelViewsTime: "321K views  5 months ago"
    },
    {
        id: 21,
        video: new URL("https://www.youtube.com/embed/AFglK9Zf_8Q"),
        channelLogo: new URL("https://yt3.ggpht.com/oJx8KnPtuxwePpo0DBxEq6OVu4MynwmKqtoPmA1eY1Hxus2a1Dq_yyQnKju6VVLAE4VYYt1xdA=s88-c-k-c0x00ffffff-no-rj"),
        title: "EVERY LITTLE STEP | Choreography | New Jack Swing",
        channelName: "Vijay Rawat",
        channelViewsTime: "484 views . 6 months ago"
    },
    // {
    //     id: 22,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 23,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 24,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 25,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 26,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 27,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 28,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 29,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 30,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 31,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 32,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 33,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 34,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 35,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 36,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 37,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 38,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 39,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 40,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 41,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 42,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 43,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 44,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 45,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 46,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 47,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 48,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 49,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 50,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 51,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 52,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 53,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 54,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 55,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 56,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 57,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 58,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 59,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 60,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 61,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 62,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 63,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 64,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 65,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 66,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 67,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 68,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },
    // {
    //     id: 69,
    //     video: new URL(),
    //     channelLogo: new URL(""),
    //     title: "",
    //     channelName: "",
    //     channelViewsTime: ""
    // },

]

export default Videos;

