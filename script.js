

    // TOPへリンクがクリックされた時の処理
    $('a[href="#top_container"]').on('click', function(event) {
        // デフォルトのクリック動作をキャンセル
        event.preventDefault();
        // スクロール位置を取得してスムーズにスクロール
        $('html, body').stop().animate({
            scrollTop: 0 // ページの先頭へスクロール
        }, 5000, 'easeOutExpo');
    });

TweenMax.staggerFrom('.menu_content',5,{opacity:0,y:"100", delay:3.0,ease:Elastic.easeOut.config(0.7,0.4)},0.18)
TweenMax.staggerFrom('.title-item',5,{opacity:0,y:"100", delay:3.0,ease:Elastic.easeOut.config(0.7,0.4)},0.18)
TweenMax.staggerFrom('.logo_media',5,{opacity:0,x:"-100", delay:3.0,ease:Elastic.easeOut.config(0.7,0.4)},0.18)
TweenMax.staggerFrom('.content',5,{opacity:0,x:"100", delay:4.0,ease:Elastic.easeOut.config(0.7,0.4)})


gsap.registerPlugin(ScrollTrigger)

gsap.to(".arrow", {
    duration: 1, // アニメーションの1周期の時間（秒）
    repeat: -1, // 無限に繰り返す
    yoyo: true, // 往復アニメーションにする
    y: 20, // 上下に動かす距離（ピクセル）
    ease: "power1.inOut" // イージング関数（任意のものを指定可能）
  });
  

gsap.utils.toArray('.title-left').forEach(title=>{
    gsap.fromTo(title,{
        letterSpacing:'10px',
        opacity:0,
        x:-300,
        skewX:65
    },{
        letterSpacing:'0',
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:.5,
        ease:Power3.easeOut,
        scrollTrigger:title
    })
})
gsap.utils.toArray('.Brand-logo01').forEach(logo=>{
    gsap.fromTo(logo,{
        opacity:0,
        x:-300,
        skewX:65
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1.5,
        delay:.5,
        scrollTrigger:logo
    })
})
gsap.utils.toArray('.Brand-logo02').forEach(logo=>{
    gsap.fromTo(logo,{
        opacity:0,
        x:-300,
        skewX:65
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1.5,
        delay:.5,
        scrollTrigger:logo
    })
})
gsap.utils.toArray('.Brand-logo03').forEach(logo=>{
    gsap.fromTo(logo,{
        opacity:0,
        x:-300,
        skewX:65
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1.5,
        delay:.5,
        scrollTrigger:logo
    })
})
gsap.utils.toArray('.Brand-logo04').forEach(logo=>{
    gsap.fromTo(logo,{
        opacity:0,
        x:-300,
        skewX:65
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1.5,
        delay:.5,
        scrollTrigger:logo
    })
})

const logosData = [
    { selector: '.React-logo', delay: 0.5 },
    { selector: '.Typescript-logo', delay: 0.7 },
    { selector: '.Firebase-logo', delay: 0.9 },
    { selector: '.AWS-logo', delay: 1.1 },
    { selector: '.AWS-amplify-logo', delay: 1.15 },
    { selector: '.materialui-logo', delay: 1.2 },

    { selector: '.nodejs-logo', delay: 1.0 },
    { selector: '.Express-logo', delay: 1.2 },
    { selector: '.mongo-logo', delay: 1.4 },
    { selector: '.render-logo', delay: 1.6 },
    { selector: '.postman-logo', delay: 1.8 },

    { selector: '.next-logo', delay: 0.5 },
    { selector: '.prisma-logo', delay: 0.9 },
    { selector: '.nextauth-logo', delay: 1.0 },
    { selector: '.microcms-logo', delay: 1.2 },
    { selector: '.stripe-logo', delay: 1.4 },
    { selector: '.vercel-logo', delay: 1.6 },

    { selector: '.cloudflont-logo', delay: 0.9 },
    { selector: '.s3-logo', delay: 1.2 },
    { selector: '.github-actions-logo', delay: 1.4 },
    { selector: '.microcms-logo02', delay: 1.6 },

    { selector: '.express-logo', delay: 0.9 },
    { selector: '.prisma-logo02', delay: 0.9 },
    { selector: '.apprunner-logo', delay: 1.4 }
  ];
  
  logosData.forEach(({ selector, delay }) => {
    gsap.utils.toArray(selector).forEach(title => {
      gsap.fromTo(title, {
        opacity: 0,
        x: -300,
        skewX: 65
      }, {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay,
        scrollTrigger: title
      });
    });
  });
  

gsap.utils.toArray('.title-right').forEach(title=>{
    gsap.fromTo(title,{
        letterSpacing:'10px',
        opacity:0,
        x:300,
        skewX:0
    },{
        letterSpacing:'0',
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:.5,
        scrollTrigger:title
    })
})
gsap.utils.toArray('.img-right01').forEach(img=>{
    gsap.fromTo(img,{
        opacity:0,
        x:300,
    },{
        opacity:1,
        x:0,
        duration:1.0,
        delay:.5,
        scrollTrigger:".img-right01"
    })
})
gsap.utils.toArray('.img-right02').forEach(img=>{
    gsap.fromTo(img,{
        opacity:0,
        x:300,
    },{
        opacity:1,
        x:0,
        duration:1.0,
        delay:.5,
        scrollTrigger:".img-right02"
    })
})
gsap.utils.toArray('.img-right03').forEach(img=>{
    gsap.fromTo(img,{
        opacity:0,
        x:300,
    },{
        opacity:1,
        x:0,
        duration:1.0,
        delay:.5,
        scrollTrigger:".img-right03"
    })
})
gsap.utils.toArray('.img-right04').forEach(img=>{
    gsap.fromTo(img,{
        opacity:0,
        x:300,
    },{
        opacity:1,
        x:0,
        duration:1.0,
        delay:.5,
        scrollTrigger:".img-right04"
    })
})




gsap.utils.toArray('.button-left01').forEach(button=>{
    gsap.fromTo(button,{
        opacity:0,
        y:100,
    },{
        opacity:1,
        y:0,
        duration:0.5,
        delay:.5,
        scrollTrigger:".button-left01"
    })
})
gsap.utils.toArray('.button-right01').forEach(button=>{
    gsap.fromTo(button,{
        opacity:0,
        y:100,
    },{
        opacity:1,
        y:0,
        duration:0.5,
        delay:.8,
        scrollTrigger:".button-right01"
    })
})
gsap.utils.toArray('.button-left02').forEach(button=>{
    gsap.fromTo(button,{
        opacity:0,
        y:100,
    },{
        opacity:1,
        y:0,
        duration:0.5,
        delay:.5,
        scrollTrigger:".button-left02"
    })
})
gsap.utils.toArray('.button-right02').forEach(button=>{
    gsap.fromTo(button,{
        opacity:0,
        y:100,
    },{
        opacity:1,
        y:0,
        duration:0.5,
        delay:.8,
        scrollTrigger:".button-right02"
    })
})
gsap.utils.toArray('.button-left03').forEach(button=>{
    gsap.fromTo(button,{
        opacity:0,
        y:100,
    },{
        opacity:1,
        y:0,
        duration:0.5,
        delay:.5,
        scrollTrigger:".button-left03"
    })
})
gsap.utils.toArray('.button-right03').forEach(button=>{
    gsap.fromTo(button,{
        opacity:0,
        y:100,
    },{
        opacity:1,
        y:0,
        duration:0.5,
        delay:.8,
        scrollTrigger:".button-right03"
    })
})
gsap.utils.toArray('.button-left04').forEach(button=>{
    gsap.fromTo(button,{
        opacity:0,
        y:100,
    },{
        opacity:1,
        y:0,
        duration:0.5,
        delay:.5,
        scrollTrigger:".button-left04"
    })
})
gsap.utils.toArray('.button-right04').forEach(button=>{
    gsap.fromTo(button,{
        opacity:0,
        y:100,
    },{
        opacity:1,
        y:0,
        duration:0.5,
        delay:.8,
        scrollTrigger:".button-right04"
    })
})


gsap.utils.toArray('p').forEach(p=>{
    gsap.fromTo(p,{
        opacity:0,
        x:150,
        skewX:30
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:.5,
        scrollTrigger:p

    })
})


gsap.utils.toArray('button').forEach(button=>{
    gsap.fromTo(button,{
        opacity:0,
    },{
        opacity:1,
        duration:1,
        delay:1,
        scrollTrigger:button

    })
})


gsap.utils.toArray('.line').forEach(line=>{
    gsap.fromTo(line,{
        opacity:0,
        width:'0%'
    },{
        opacity:1,
        width:'100%',
        duration:1,
        delay:1,
        scrollTrigger:line

    })
})




let typed = new Typed('.multiple-text', {
  strings: ['家計簿アプリ', 'ebook-commerce','MicroCMS CI/CD','TodoList', '家計簿アプリ', '電子書籍 e-commerce','MicroCMS CI/CD','TodoList','電子書籍 e-commerce'],
  typeSpeed: 40,
backSpeed:80,
backDelay:500,
loop:true,
smartBackspace: true,
startDelay: 5500
});


gsap.from('.img-1',3.9,{opacity:0, y:550, delay:0.1, ease:Expo.easeInOut})
gsap.from('.img-2',1.2,{opacity:0, y:-250, delay:2.2})
gsap.from('.img-3',1.2,{opacity:0, y:150, delay:2.5})
gsap.from('.img-4',27.2,{opacity:0, x:-150, delay:1.7})
gsap.from('.img-5',19.2,{opacity:0, x:350, delay:1.9})
gsap.from('.img-6',25.2,{opacity:0, x:150, delay:2.1})
gsap.from('.img-7',3.2,{opacity:0, y:50, delay:2.9})
gsap.from('.img-8',4.2,{opacity:0, y:50, delay:3.1})
gsap.from('.img-9',2.2,{opacity:0, y:50, delay:2.3})
gsap.from('.img-10',2.2,{opacity:0, y:50, delay:1.9})
gsap.from('.img-11',2.2,{opacity:0, y:50, delay:1.3})
gsap.from('.img-12',5.2,{opacity:0, y:50, delay:1.5})
gsap.from('.img-13',4.2,{opacity:0, y:50, delay:1.5})
gsap.from('.img-14',4.2,{opacity:0, y:50, delay:1.7})
gsap.from('.tag-line',1.2,{opacity:0, x:-50, delay:3.7})
gsap.from('.arrow',{opacity:0, delay:5.5})


const burger_menu =document.querySelector('.burger_menu');
const menu =document.querySelector('.menu');

burger_menu.onclick = function(){
    console.log('hello');
    menu.classList.toggle('active'); 
}




// const menu = document.querySelector('.menu')


// gsap.from(menu.children,{
//     opacity:0,
//     x:50,
//     duration:1,
//     delay:.5,
//     stagger:{
//         amount:1
//     },
//     scrollTrigger:{
//         trigger:menu.children
//     }
// })

// gsap.from('.logo div',{
//     opacity:0,
//     delay:1,
//     x:20
// } )

// const menu_items = document.querySelector('.menu-items')
// gsap.from(menu_items.children ,{
//     opacity:0,
//     y:50,
//     duration:1,
//     delay:0.5,
//     stagger:{
//         amount:1
//     }
// })


// gsap.utils.toArray('.star').forEach(star=>{
//     gsap.fromTo(star,{
//         rotation:450,
//         opacity:0,
//         y:100
//     },{
//         rotation:0,
//         opacity:1,
//         y:0,
//         duration:1,
//         delay:1.5,
//         scrollTrigger:star
//     })
// })