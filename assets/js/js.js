// history.scrollRestoration = "manual"

//로고 로티
var logoAnimation = bodymovin.loadAnimation({
    container: $('.logo-lottie')[0],
    path: './assets/data/logo-motion.json', 
    renderer: 'svg', 
    loop: false, 
    autoplay: false,
  });

//딜레이
  setTimeout(() => {
    logoAnimation.play();
  }, 3000);



// intro
//pc,테블릿
gsap.registerPlugin(ScrollTrigger);

let mm3 = gsap.matchMedia();

    mm3.add("(min-width: 767px)", () => {

        const introTl = gsap.timeline({})
        introTl
        .to('.wraper .intro-bg',0.5,{delay: 2,yPercent:100},"a")
        .to('.header .logo-lottie',1,{opacity: 1},"a")
        .to('.intro-event',0.3,{delay: 2,opacity: 1})

        .to('.header h1',2,{width: "15.2rem"},"3+=1")
        .from('.sc-visual .group-video',1,{yPercent: 110},"3")
        .to('.sc-visual .box1',{transform: 'translateY(0%)'},"3+=0.5")
        .to('.sc-visual .box2',{transform: 'translateY(0%)'},"3")
        .from('.header .symbol',0.3,{delay: 2,opacity: 0,},"3")

        .to('.sc-visual .bg',1,{width: "0"},"4")
        .to('.sc-visual .box2',1,{height: '60%'},"4")

        .from('.text-inner span', {
            duration:1.2,
            yPercent: -100,
            ease: "epop.out",
            stagger: 0.05
        },"4")

});

//모바일
gsap.registerPlugin(ScrollTrigger);

let mm4 = gsap.matchMedia();

    mm4.add("(max-width: 767px)", () => {

        gsap.set('.sc-visual .text-group',{ opacity: 1})
        gsap.set('.sc-visual p',{ opacity: 1})
        const introT2 = gsap.timeline({})
        introT2
        .from('.text-inner span', {
            duration:0.5,
            yPercent: -100,
            ease: "epop.out",
            stagger: 0.05,
            delay: 1.5,
        })
});



//header 모바일
//햄버거 메뉴
var menuAnimation = bodymovin.loadAnimation({
    container: $('.btn-motion')[0],
    path: './assets/data/btn-menu-motion.json', 
    renderer: 'svg', 
    loop: false, 
    autoplay: false,
});

//메뉴동작
var isAnimationReversed = false; // 애니메이션의 방향을 추적하는 변수

$('.btn-menu').click(function(){
    // 클래스를 토글하지 않고 변수를 사용하여 애니메이션 방향을 추적

    if (isAnimationReversed){
        menuTl.reverse();
        menuAnimation.setDirection(-1); // 애니메이션 방향을 역으로 설정
        menuAnimation.play(); // 역재생 시작
        document.body.style.overflow = 'unset';
    } else {
        menuAnimation.setDirection(1); // 애니메이션 방향을 다시 정방향으로 설정
        menuAnimation.play(); // 정방향 재생 시작
        menuTl.play();
        document.body.style.overflow = 'hidden';
    }
    isAnimationReversed = !isAnimationReversed;
});

//메뉴 애니메이션
const menuTl = gsap.timeline({ paused:true, })
menuTl
.from('.group-m-menu',{yPercent:100},'a')
.to('.group-m-menu .bg',{duration:1,height:'100svh',ease:'power3'},'a')
.to('.group-m-menu .top-list',{duration:1,opacity: 1,ease:'power3',transform:'translateY(0)'},'a+=0.4')
.to('.group-m-menu .bottom-list',{duration:1,ease:'power3',transform:'translateY(0)'},'a+=0.4')
.to('.group-m-menu .link-box',{duration:1,ease:'power3',transform:'translateY(0)'},'a+=0.7')
.to('.group-m-menu .deco-box',{duration:1.2,ease:'power3',transform:'translateY(0)'},'a')
.from('.group-m-menu .box1',{delay: 0.4,duration:1.5,ease:'power3',top:'0'},"a")

const menuT2 = gsap.timeline({})
    menuT2
    .to('.top-menu',{transform: 'translateY(0)',ease:'power3',duration:1,},'a')
    .to('.top-menu-bg',{transform: 'translateY(0)',ease:'power3',duration:1,},'a')
  
ScrollTrigger.create({
    start: "top top",
    onUpdate: (self) => {
        self.direction === -1 ? menuT2.play() : menuT2.reverse()
    }
});

//링크 클릭시 메뉴 접기
$('.group-m-menu .top-list a').click(function(){
    menuTl.reverse();
    menuAnimation.setDirection(-1); // 애니메이션 방향을 역으로 설정
    menuAnimation.play(); // 역재생 시작
    document.body.style.overflow = 'unset';
    isAnimationReversed = false;
});



//sc-newidea
//h2
const texteventTl = gsap.timeline({
    scrollTrigger: {
        trigger:".sc-newidea .group-text",
        start:"0 80%",
        end:"100% 80%",
        // markers:true,
        scrub:5,   
    },
})
texteventTl
.from('.col-right .item',1.8,{ 
    duration:2,
    yPercent:-250,
    stagger: 0.05,
    },'a')

.from('.sc-newidea .event-box',{width:0,delay: 1.7,duration:1,ease:'power3'},'a')

//card pc,테블릿만 적용
gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(min-width: 1025px)", () => {
    const newideaT2 = gsap.timeline({
        scrollTrigger: {
            trigger:".sc-newidea",
            start:"0 50%",
            end:"100% 50%",
            // markers:true,
            scrub:3,   
        },
    })
    newideaT2.from('.sc-newidea .group-shapes-box2',{yPercent: -30,},)
    newideaT2.to('.sc-newidea .inner2',2,{yPercent: 10,},'a')
    newideaT2.to('.sc-newidea .inner3',2,{yPercent: 20,},'a')
});

//도형 카드 제목
ScrollTrigger.batch('.group-card-inner .text-item', { //여러개 같이 쓰일때 gsap에서 제공해줌
    start: "0 100%",

    onEnter: batch => {
        gsap.from(batch, {
        yPercent:-110,
        duration:0.7,
        ease: "epop.out",
        stagger: {
            each: .5,
        },
        });
    },
});

//카드 도형 lottie
// var animation1 = bodymovin.loadAnimation({
//     container: $('.lottie1')[0],
//     path: './assets/data/motion1.json', 
//     renderer: 'svg', 
//     loop: true, 
//     autoplay: true 
//   });
  
// var animation2 = bodymovin.loadAnimation({
//     container: $('.lottie2')[0],
//     path: './assets/data/motion2.json', 
//     renderer: 'svg', 
//     loop: true, 
//     autoplay: true 
// });

// var animation3 = bodymovin.loadAnimation({
//     container: $('.lottie3')[0], // Required
//     path: './assets/data/motion3.json', 
//     renderer: 'svg', 
//     loop: true, 
//     autoplay: true 
// });



// sc-vision
// h2
ScrollTrigger.batch('.sc-vision .group-text .item', { //여러개를 선택할때 쓰는거 batch
    start: "0 100%",
    // markers:true,
    
    onEnter: batch => {
      gsap.from(batch, {
        y:'-220%',
      duration:1.5,
      ease: "epop.out",
      stagger: {
          each: .05,
      },
      });
    },
  });
gsap.from('.sc-vision .event-box',{
    scrollTrigger: {
        trigger:".sc-vision .group-text",
        start:"0 70%",
        end:"50% 70%",
        // markers:true,
        scrub:3
    },
    width:0,delay: 1,duration:1,ease:'power3'
})

//menu
const visionT1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-vision .group-bottom',
        start:"50% 50%",
        end:"60% 50%",
        // markers:true,
        scrub:3,
    },
})
visionT1
visionT1.to('.sc-vision .menu-box .bg',{ xPercent: 100,backgroundColor: 'rgb(255, 139, 74)',},"a")
visionT1.to('.sc-vision .menu-box .experts-team',{ color: 'rgb(255, 255, 255)',},"a")
visionT1.from('.sc-vision .menu-box .corem-team',{ color: 'rgb(255, 255, 255)',},"a")

//team_item 
$('[data-scroll-y]').each(function(i,el){
    gsap.from(el,{
        scrollTrigger: {
            trigger: el,
            start:"0% 70%",
            end:"30% 70%",
            // markers:true,
            scrub: 3,
        },
        xPercent:el.dataset.scrollY
    })
})

//team_item text
ScrollTrigger.batch('.sc-vision .team_item .item', { //여러개를 선택할때 쓰는거 batch
    start: "0 100%",
    // markers:true,
    
    onEnter: batch => {
      gsap.from(batch, {
      yPercent: -120,
      duration:0.8,
      ease: "epop.out",
      stagger: {
          each: .5,
      },
      });
    },
  });

//버튼 로티 호버했을때 모션
const btnContainers = document.querySelectorAll(".btn-lottie");
btnContainers.forEach(container => {
  container.addEventListener("mouseover", () => {
    const player = container.querySelector("lottie-player");
    player.setDirection(1);
    player.play();
  });

  container.addEventListener("mouseleave", () => {
    const player = container.querySelector("lottie-player");
    player.setDirection(-1);
    player.play();
  });
});



//sc-advisors
//h2
gsap.registerPlugin(ScrollTrigger);

let mm2 = gsap.matchMedia();

    mm2.add("(min-width: 767px)", () => {
    gsap.from('.sc-advisors .advisors-item',{
        scrollTrigger: {
            trigger:".sc-advisors",
            start:"0 70%",
            end:"50% 70%",
            // markers:true,
        },
        duration:2,
        yPercent:100,
        stagger: {
            grid: [5,5],
            from:"edges",
            axis: "x",
            amount: 0.3
        },
    })

});
//더보기
$('.show-more').click(function(){ $('.advisors-list').addClass('show') })



//sc-decoration
const decorationT1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-definition',
        start:"-20% 50%",
        end:"70% 50%",
        // markers:true,
        scrub:1,
    },
})
decorationT1
decorationT1.from('.sc-definition .box img',0.3,{yPercent:200},"a")
decorationT1.to('.sc-definition .inner1',{ xPercent:20},"a")
decorationT1.to('.sc-definition .inner2',{ xPercent:-30},"a")
decorationT1.to('.sc-definition .inner3',{ xPercent:30},"a")

//text
gsap.utils.toArray('.sc-definition .text').forEach(item => {

    decorationTl=gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "0 40%",
            end: "100% 20%",
            // markers: true,
            scrub: 0,
        },
    })
    decorationTl
    .to(item,{opacity:1})
    .to(item,{opacity:0.2})
});



//sc-directory
//h2
ScrollTrigger.batch('.sc-directory .group-text .item', { //여러개를 선택할때 쓰는거 batch
    start: "0 100%",
    // markers:true,
    
    onEnter: batch => {
      gsap.from(batch, {
        y:'-220%',
      duration:1.5,
      ease: "epop.out",
      stagger: {
          each: .2,
      },
      });
    },
  });
gsap.from('.sc-directory .event-box',{
    scrollTrigger: {
        trigger:'.sc-directory .group-text',
        start:"0 70%",
        end:"50% 70%",
        // markers:true,
        scrub:3
    },
    width:0,delay: 1,duration:1,ease:'power3'
})

//list
gsap.from('.sc-directory ul > *',{
    scrollTrigger: {
        trigger:".sc-directory",
        start:"0 50%",
        end:"70% 50%",
        // markers:true,
        scrub:3,
    },
    once: true,
    duration:0.8,
    opacity:0,
    yPercent:100,
    stagger:0.1,
})



//footer
//도형 위로 올라가기 하기
const footerTl = gsap.timeline({
    scrollTrigger: {
        trigger:".footer-graphic",
        start:"0 100%",
        end:"100% 100%",
        // markers:true,
        scrub:20,
        duration:3,
    },
})
footerTl
footerTl.to('.footer-graphic ._1',{height: '40%',ease:'power3'},"a")
footerTl.to('.footer-graphic ._2',{top: '127.287px',ease:'power3'},"a")
footerTl.to('.footer-graphic ._3',{height: '55%',ease:'power3'},"a")
footerTl.to('.footer-graphic ._4',{top: '0',ease:'power3'},"a")
footerTl.to('.footer-graphic ._5',{height: '55%',ease:'power3'},"a")
footerTl.to('.footer-graphic ._6',{top: '214.15px',ease:'power3'},"a")
footerTl.to('.footer-graphic ._7',{height: '40%',ease:'power3'},"a")

//마우스 이벤트
const customCursor = document.querySelector(".mouse");
$('.footer-graphic').mousemove(function(e){
    gsap.to(customCursor,{
        x: e.clientX,
        y: e.clientY,
    });
})

//도형 배경 투명하게 하기
// const graphicItem = document.querySelectorAll('.graphic_item');
$('.graphic_item').hover(function(){
    $('.graphic_item').addClass('on')
    $('.mouse').addClass('show')

},function(){
    $('.mouse').removeClass('show')
    $('.graphic_item').removeClass('on')
})

//도형 y축이동
Draggable.create(".graphic_item", {
    type:"y",
	bounds:".footer-graphic",
	// edgeResistance:0,
	// throwProps:true
});



