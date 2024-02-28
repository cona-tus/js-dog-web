# 🐶 강아지 케어 서비스 웹사이트, 'Doggy' 프로젝트

![doggy-thumb](https://github.com/cona-tus/js-dog-web/assets/90844424/fd046604-b214-4829-8d37-0ddb480d4591)

<br/>

🔗 Doggy [[Live Demo](https://js-dog-web.netlify.app)]

<br/>
<br/>

## 1. Project

### 1-1. Project Description

Doggy는 강아지 케어 서비스를 컨셉으로 한 싱글페이지 웹사이트입니다. 친근하고 직관적인 UI를 갖추도록 웹디자인과 웹퍼블리싱 작업을 진행했습니다. SCSS와 JavaScript를 사용해 동적인 웹사이트를 제작하였으며, hover 효과, 마우스 커서 변경, 스크롤 애니메이션, 아코디언 메뉴 등을 적용하여 사용자 인터랙션을 향상시켰습니다. 다양한 디바이스에서 웹을 탐색할 수 있도록 유연한 Grid 및 Flex 레이아웃을 활용하여 반응형 디자인을 구현했습니다. 또한 웹접근성을 고려하여 시맨틱 태그를 사용하고, 본문으로 건너뛰기 메뉴, 키보드 탐색 기능 등을 제공하여 사용자가 쉽게 이용할 수 있도록 했습니다. Doggy를 만나보세요.

<br/>

### 1-2. Project Duration & Participants

- 2024-2-16 ~ 2024-2-23
- 개인 프로젝트 (1인)

<br/>
<br/>

## 2. Skills

![HTML](https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![SCSS](https://img.shields.io/badge/Sass-bf4080?style=for-the-badge&logo=Sass&logoColor=ffffff) ![JAVASCRIPT](https://img.shields.io/badge/JavaScript-f6e158?style=for-the-badge&logo=JavaScript&logoColor=ffffff) ![Git](https://img.shields.io/badge/Git-f05032?style=for-the-badge&logo=git&logoColor=ffffff)

<br/>
<br/>

## 3. Main Features

1. [드롭다운 메뉴](#3-1-header-dropdown-menu)
2. [모바일 전체화면 모드](#3-2-mobile-header--full-screen-mode)
3. [본문으로 건너뛰기 메뉴](#3-3-skip-menu)
4. [슬라이드쇼 애니메이션](#3-4-slideshow-with-animation)
5. [스크롤 애니메이션](#3-5-scroll-animation)
6. [스크롤 최상단 이동](#3-6-scroll-to-top)
7. [커서 변경](#3-7-change-cursor)
8. [아코디언 메뉴](#3-8-accordion-menu)
9. [마우스 오버 효과](#3-9-hover-line-effect)
10. [Grid 및 Flex 레이아웃](#3-10-grid--flex-layout)
11. [Position 요소](#3-11-positioned-element)
12. [반응형 웹디자인](#3-12-responsive-web-design)

<br/>

### 3-1. Header Dropdown Menu

![doggy-dropdown](https://github.com/cona-tus/js-dog-web/assets/90844424/913b4d91-e7de-4c68-8d62-cacc2beeb5c1)

header에 위치한 메뉴에 마우스를 올리면 하위 메뉴가 펼쳐지는 드롭다운 기능을 제공합니다. 이러한 기능을 통해 내비게이션을 효율적으로 만들 수 있습니다.

<br/>

```html
<nav class="header-nav">
  <ul class="header-menu">
    <!-- 다른 코드... -->
    <li class="header-menu-item">
      <span class="header-menu-item__title">
        <a
          href="/"
          class="header-menu-item__link"
          onclick="JavaScript: return false;"
          >About</a
        >
      </span>
      <ul class="header-dropdown">
        <li class="header-dropdown-item">
          <span class="header-dropdown__link-wrapper link-wrapper">
            <a href="#" class="header-dropdown__link link">Our Service</a>
          </span>
        </li>
        <li class="header-dropdown-item">
          <span class="header-dropdown__link-wrapper link-wrapper">
            <a href="#" class="header-dropdown__link link">Our Team</a>
          </span>
        </li>
      </ul>
    </li>
  </ul>
</nav>
```

<br/>

`header-menu-item`에 마우스를 올리면 `header-dropdown`의 투명도와 가시성을 변경하여 화면에 표시합니다. 또한 `header-dropdown-item`의 translateY를 조정하여 등장 효과를 부여합니다.

```scss
.header-menu-item {
  // 다른 코드...
  position: relative;

  &:hover {
    .header-dropdown {
      opacity: 1;
      visibility: visible;

      .header-dropdown-item {
        transform: translateY(0);
      }
    }
  }

  .header-dropdown {
    // 다른 코드...
    width: 200px;
    min-width: fit-content;
    max-width: 300px;
    position: absolute;
    top: 100%;
    left: 0;
    opacity: 0;
    visibility: hidden;
    will-change: opacity visibility;
    transition: all 0.3s ease-in-out;
    z-index: 999;

    .header-dropdown-item {
      transform: translateY(10px);
    }
  }
}
```

<br/>
<br/>

### 3-2. Mobile Header && Full Screen Mode

![doggy-fullscreen](https://github.com/cona-tus/js-dog-web/assets/90844424/eefba12f-5e0f-411c-a4f8-17b14146456a)

모바일 기기에서 접속할 경우 mobile header가 표시됩니다. 사용자는 메뉴 버튼을 클릭하여 전체 화면을 차지하는 내비게이션 메뉴로 이동할 수 있습니다.

<br/>

```html
<header class="mobile-header mobile--close">
  <div class="mobile-header-inner">
    <button type="button" class="mobile-close-btn">
      <div class="close-btn__bar bar--left"></div>
      <div class="close-btn__bar bar--right"></div>
    </button>
  </div>
</header>
```

<br/>

화면 너비가 912px 이하로 축소될 때, `default-header`를 사라지도록 하고, `mobile-header`를 보이게 하여 header를 교체합니다.

```scss
@include tablet-wide {
  .default-header {
    display: none;
  }

  .mobile-header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }
}
```

<br/>

사용자가 전체 화면을 열고 닫기 위해 `mobile-close-btn`을 클릭하면, `mobile--close`와 `full-screen--open` 클래스가 토글되어 모바일 내비게이션을 화면에 표시하거나 숨기도록 만듭니다.

```js
mobileCloseBtn.addEventListener('click', () => {
  mobileHeader.classList.toggle('mobile--close');
  body.classList.toggle('full-screen--open');
  fullScreen.classList.toggle('full-screen--open');
});
```

<br/>

전체 화면 모드일 때 스크롤이 발생하지 않도록 `body`의 높이를 `100vh`로 설정하고, 넘치는 부분을 자르도록 `overflow: hidden`를 적용합니다.

```scss
.body {
  &.full-screen--open {
    height: 100vh;
    overflow: hidden;
  }
}

.full-screen {
  &.full-screen--open {
    opacity: 1;
    visibility: visible;
  }
}
```

<br/>
<br/>

### 3-3. Skip Menu

![doggy-tabkey](https://github.com/cona-tus/js-dog-web/assets/90844424/c0a3c1ec-bcba-47bc-a2bb-04f965188fe8)

웹 접근성을 높이기 위해 웹 페이지의 주요 콘텐츠로 바로 이동할 수 있는 링크를 제공합니다. skip menu 요소는 body 태그 바로 아래 위치시켜, 키보드로 웹을 탐색하는 사용자에게 도움이 되도록 합니다.

<br/>

```html
<body>
  <a class="skip-link" href="#page-content">Skip to the content</a>
  <!-- 다른 코드... -->
  <main class="main" id="page-content"></main>
</body>
```

<br/>

skip menu는 기본적으로 화면에 시각적으로 표시되지 않습니다. Tab 카를 눌렀을 때 나타날 수 있도록 애니메이션을 적용합니다.

```scss
.skip-link {
  width: 1px;
  height: 1px;
  position: absolute;
  top: -10000em;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;

  &:focus {
    @include nav-title;
    width: auto;
    height: auto;
    display: block;
    top: 1rem;
    left: 1rem;
    padding: 1rem 1.5rem;
    color: $color-black;
    background-color: $color-white;
    border: 0.5rem;
    box-shadow: $box-shadow-100;
    clip: auto !important;
    clip-path: none;
    z-index: 9999;
    animation: slide-in 0.5 s ease-in-out forwards;
  }
}

@keyframes slide-in {
  from {
    transform: translateY(-50px);
  }

  to {
    transform: translateY(0);
  }
}
```

<br/>

또한 키보드를 사용해 sidebar를 열었을 때, 창을 바로 닫을 수 있도록 `side-close-btn`에 `focus()` 함수를 등록해 자동으로 포커스되도록 만듭니다.

```html
<div class="side side--close">
  <button type="button" class="side-close-btn">
    <div class="close-btn__bar bar--left"></div>
    <div class="close-btn__bar bar--right"></div>
  </button>
  <!-- 다른 코드... -->
</div>
```

<br/>

sidebar가 열리는 애니메이션이 종료된 후 해당 요소에 포커싱될 수 있도록 `setTimeout` 함수를 사용해 `focus()`를 지연시킵니다.

```js
setTimeout(() => {
  sideCloseBtn.focus();
}, 500);
```

<br/>
<br/>

### 3-4. SlideShow with Animation

![doggy-slide](https://github.com/cona-tus/js-dog-web/assets/90844424/3a64edba-10a5-46fb-820b-f5dd31fc91a3)

swiper.js와 anime.js 라이브러리를 사용해 브랜드 이미지를 강조하는 슬라이드쇼를 구현합니다. 옵션으로는 자동 재생과 fade 효과, 그리고 루프 기능을 사용합니다.

<br/>

```js
const mainSwiper = new Swiper('.slideshow-swiper', {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 0,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.slideshow-swiper-btn--next',
    prevEl: '.slideshow-swiper-btn--prev',
  },
});
```

<br/>

애니메이션을 적용할 요소를 지정하고, 슬라이드가 교체될 때 `restart()` 함수를 호출해 콘텐츠가 부드럽게 등장하는 효과를 적용합니다.

```js
let titleAnimation = anime({
  targets: '.slideshow-swiper-slide-text__title',
  translateY: [30, 0],
  duration: 500,
  opacity: [0, 1],
  easing: 'easeInOutQuad',
});

let descAnimation = anime({
  targets: '.slideshow-swiper-slide-text__desc',
  translateY: [30, 0],
  duration: 500,
  opacity: [0, 1],
  delay: 300,
  easing: 'easeInOutQuad',
});

let btnAnimation = anime({
  targets: '.slideshow-swiper-slide-text__btn',
  translateX: [-30, 0],
  duration: 500,
  opacity: [0, 1],
  delay: 500,
  easing: 'easeInOutQuad',
});

mainSwiper.on('slideChange', function () {
  titleAnimation.restart();
  descAnimation.restart();
  btnAnimation.restart();
});
```

<br/>
<br/>

### 3-5. Scroll Animation

![doggy-scroll-anime01](https://github.com/cona-tus/js-dog-web/assets/90844424/74d44a69-2110-4953-9b3b-84fec692f8e5)

scroll-out.js 라이브러리를 사용해 요소가 화면에 보일 때 등장 애니메이션을 트리거합니다.

<br/>

애니메이션을 적용할 요소에 `data-scroll`를 속성을 지정합니다.

```html
<p class="team-text__subtitle" data-scroll>
  We are trained professionals. What we do for you is with so much love for your
  dog.
</p>
<p class="team-text__desc" data-scroll>
  Our team will love your dog like we love our own! You can trust us with your
  dog.
</p>
```

<br/>

CSS를 작성해 애니메이션을 구현합니다.

```scss
.team-text__subtitle {
  &[data-scroll] {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &[data-scroll='in'] {
    opacity: 1;
    transform: translateX(0);
  }

  &[data-scroll='out'] {
    opacity: 0;
  }
}

.team-text__desc {
  &[data-scroll] {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 1.5s 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &[data-scroll='in'] {
    opacity: 1;
    transform: translateX(0);
  }

  &[data-scroll='out'] {
    opacity: 0;
  }
}
```

<br/>

자바스크립트에서 `ScrollOut()`을 호출해 스크롤되면 애니메이션이 처리되게 만듭니다.

```js
ScrollOut({
  threshold: 0.7,
});
```

<br/>

![doggy-scroll-anime02](https://github.com/cona-tus/js-dog-web/assets/90844424/bdaf3a80-f065-4452-9810-87fb8665654d)

숫자 카운팅 애니메이션을 구현하기 위해서는 anime.js와 scroll-out.js 라이브러리를 사용합니다. `clientCountItems`를 `forEach`로 순회하면서 각 요소에 대해 반복문을 실행합니다. 그리고 `switch` 문을 사용해 각 케이스마다 목표 값을 처리하고, 애니메이션을 적용합니다. `ScrollOut()`을 호출하여 해당 요소가 화면에 나타날 때 애니메이션이 재생되도록 설정합니다.

```js
clientCountItems.forEach((item) => {
  const goalValue = item.textContent.trim();
  let targetValue;

  switch (goalValue) {
    case '20k':
      targetValue = '20k';
      break;
    case '10k':
      targetValue = '10k';
      break;
    case '100%':
      targetValue = '100%';
      break;
    case '999+':
      targetValue = '999+';
      break;
    default:
      targetValue = 0;
  }

  let countAnimation = anime({
    targets: item,
    innerHTML: [0, targetValue],
    easing: 'linear',
    round: 1,
  });

  ScrollOut({
    targets: item,
    threshold: 0.95,
    once: true,
    onShown: function () {
      countAnimation.restart();
    },
  });
});
```

<br/>
<br/>

### 3-6. Scroll to Top

![doggy-scrolltotop](https://github.com/cona-tus/js-dog-web/assets/90844424/314b8137-be9e-4f89-9a39-5c495922924e)

웹 페이지를 스크롤하여 아래로 이동한 후 Scroll to Top 버튼을 클릭하면 페이지 상단으로 즉시 이동합니다. 이 버튼은 기본적으로 화면에서 보이지 않습니다.

<br/>

```scss
.scroll-to-top-btn {
  cursor: pointer;
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 99999;
  border: 0;
  outline: 0;
  opacity: 0;
  visibility: hidden;
  background: none;
  transition: opacity 0.3s ease-in;

  &.scroll-btn--visible {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease-in;
  }

  // 다른 코드...
}
```

<br/>

`window.scrollY`가 `mainSlideHeight`(메인 슬라이드쇼)의 높이보다 크다면 `scroll-btn--visible` 클래스를 활성화시켜 화면에 표시합니다.

```js
document.addEventListener('scroll', () => {
  if (window.scrollY < mainSlideHeight) {
    scrollToTopBtn.classList.remove('scroll-btn--visible');
  } else {
    scrollToTopBtn.classList.add('scroll-btn--visible');
  }
});
```

<br/>

버튼을 클릭하면 스크롤 상단으로 스크롤합니다.

```js
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

<br/>
<br/>

### 3-7. Change Cursor

![doggy-cursor](https://github.com/cona-tus/js-dog-web/assets/90844424/4fa8cd0d-3018-4947-9495-a874836ecec9)

사용자의 후기 영역에 마우스를 오버하면 커서가 변경되어 사용자에게 슬라이드를 스와이프할 수 있는 사실을 알려줍니다.

```scss
.cursor {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
  pointer-events: none;

  .cursor__circle {
    // 다른 코드...
    width: 100px;
    height: 100px;
    position: fixed;
    transform: scale(0.5);
    opacity: 0;

    &.cursor--visible {
      opacity: 0.8;
      transform: scale(1);
      transition: all 0.3s ease-in-out;
    }
  }
}
```

<br/>

페이지가 로드될 때 마우스의 움직임에 따라 커서를 따라다니는 기능을 구현하기 위한 코드는 아래와 같습니다.

```js
window.addEventListener('load', () => {
  // 커서의 위치를 나타내는 변수 `x`와 `y` 초기화
  let x = 0;
  let y = 0;
  // 커서가 이동할 위치를 나타내는 변수인 `targetX`와 `targetY`를 초기화
  let targetX = 0;
  let targetY = 0;
  // 커서의 이동 속도 설정
  const speed = 0.1;

  // mousemove 이벤트 발생 시 페이지 상의 X, Y 좌표를 변수에 저장
  testimonial.addEventListener('mousemove', (e) => {
    x = e.pageX;
    y = e.pageY;
  });
  // mouseenter 이벤트 발생 시 클래스를 추가해서 커서를 표시
  testimonial.addEventListener('mouseenter', () => {
    cursorCircle.classList.add('cursor--visible');
  });
  // mouseleave 이벤트 발생 시 클래스를 제거하여 커서를 비표시
  testimonial.addEventListener('mouseleave', () => {
    cursorCircle.classList.remove('cursor--visible');
  });

  // 커서의 움직임을 계산하고 업데이트하여 부드러운 이동 효과 적용
  const loop = () => {
    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;

    cursor.style.transform = `translate(${targetX}px, ${targetY}px)`;
    window.requestAnimationFrame(loop);
  };

  loop();
});
```

<br/>
<br/>

### 3-8. Accordion Menu

![doggy-accordion](https://github.com/cona-tus/js-dog-web/assets/90844424/0c1ed2d0-9c9e-4971-907e-68fcb44e4cf0)

아코디언 메뉴는 여러 항목 중 하나의 항목이 확장되어 내용이 표시되고, 다른 항목들은 축소되어 내용이 감추어지는 기능입니다. 아코디언 메뉴는 full-screen 모드의 nav 영역, faq 영역에서 사용됩니다.

```html
<section class="faq">
  <ul class="faq-accordion">
    <li class="faq-accordion-item">
      <div class="faq-accordion-item__header">
        <h4 class="faq-accordion-item__question">
          How does the Doggy service operate?
        </h4>
      </div>
      <div class="faq-accordion-item__content">
        <p class="faq-accordion-item__answer">
          Doggy opefee through a dedicated app, allowing owners to schedule
          services such as walks, customized meals, and waste removal at desired
          times and frequencies. Owners can monitor Doggy's activities in
          real-time through the app.
        </p>
      </div>
    </li>
    <!-- 다른 코드... -->
  </ul>
  <!-- 다른 코드... -->
</section>
```

<br/>

`faq-accordion-item__content`의 max-height을 0으로 설정하였다가 `faq-accordion-item`에 `faq--active` 클래스가 활성될 때, max-height 값을 변경하여 화면에 표시합니다.

```scss
.faq-accordion-item {
  // 다른 코드...
  .faq-accordion-item__content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;

    // 다른 코드...
  }

  &.faq--active .faq-accordion-item__content {
    max-height: 200px;
    border-top: 1px solid $color-gray-200;
    transition: max-height 0.3s ease-in-out;
  }
}
```

<br/>

`handleAccordionClick()` 함수는 `categoryItems` 배열을 순회하면서 `clickedItem`을 제외한 다른 항목들의 활성 클래스를 제거합니다. 그 다음 `clickedItem`에 활성화 클래스를 토글하여 상태를 변경합니다.

```js
const handleAccordionClick = (category, categoryItems, clickedItem) => {
  categoryItems.forEach((otherItem) => {
    if (otherItem !== clickedItem) {
      otherItem.classList.remove(`${category}--active`);
    }
  });

  clickedItem.classList.toggle(`${category}--active`);
};
```

<br/>

각 아이템들(fullScreenItems, faqItems)을 `forEach` 메서드로 순회하면서 클릭 이벤트 리스너를 추가하고, `handleAccordionClick()` 함수에 인수를 전달합니다. 이렇게 해서 클릭한 항목을 제외한 다른 항목은 닫힌 상태를 유지할 수 있습니다.

```js
fullScreenItems.forEach((item) => {
  item.addEventListener('click', () =>
    handleAccordionClick('full-screen', fullScreenItems, item)
  );
});

faqItems.forEach((item) => {
  const faqItemHeader = item.querySelector('.faq-accordion-item__header');

  faqItemHeader.addEventListener('click', () =>
    handleAccordionClick('faq', faqItems, item)
  );
});
```

<br/>
<br/>

### 3-9. Hover Line Effect

![doggy-hover](https://github.com/cona-tus/js-dog-web/assets/90844424/1600d644-9da5-4d63-9c52-38fc5b88de27)

링크에 마우스 오버 시 언더라인이 나타나는 효과를 통해 인터랙션을 구현합니다. 스타일이 재사용 가능하도록 `mixin`을 통해 정의합니다.

<br/>

```scss
@mixin hover-line-effect {
  width: fit-content;
  transition: all 0.3s ease;

  &:hover {
    .link-wrapper::after {
      transform: scaleX(1);
    }
  }

  .link-wrapper {
    cursor: pointer;
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 2px;
      display: block;
      position: absolute;
      left: 0;
      bottom: -2px;
      background-color: $color-yellow;
      transform: scaleX(0);
      transform-origin: 0 0;
      transition: transform 0.35s cubic-bezier(0.52, 0.01, 0.16, 1);
    }

    .link {
      @include text-desc-p;
    }
  }
}
```

<br/>
<br/>

### 3-10. Grid && Flex Layout

![doggy-grid](https://github.com/cona-tus/js-dog-web/assets/90844424/1e74fd39-7dca-47be-820d-269ef4b11e03)

grid와 flex 레이아웃을 사용해 요소들을 유연하게 배치합니다. 화면 크기가 변경되면 요소들의 크기와 위치를 자동으로 조정해서 일관된 사용자 경험을 제공합니다.

<br/>

```scss
.client-container {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  .client-item {
    padding: 2rem;
    border-radius: 2rem;

    &:nth-child(1) {
      grid-column: 3 / 7;
      grid-row: 1 / 3;
      background-color: $color-light-yellow;
    }

    &:nth-child(2) {
      grid-column: 9 / 13;
      grid-row: 2 / 4;
      background-color: $color-blue;
    }

    &:nth-child(3) {
      grid-column: 3 / 7;
      grid-row: 4 / 6;
      background-color: $color-green;
    }

    &:nth-child(4) {
      grid-column: 9 / 13;
      grid-row: 5 / 7;
      background-color: $color-gray-200;
    }

    // 다른 코드...
  }
}
```

<br/>

912px를 기점으로 `grid-column`을 변경해서 크기를 크게 조정하고, 592px에서 `flex-direction: column`으로 정의하여 하나의 행으로 변경합니다.

```scss
@include tablet-wide {
  .client {
    .client-container {
      .client-item {
        &:nth-child(1) {
          grid-column: 2 / 7;
        }

        &:nth-child(2) {
          grid-column: 9 / 14;
        }

        &:nth-child(3) {
          grid-column: 2 / 7;
        }

        &:nth-child(4) {
          grid-column: 9 / 14;
        }
      }
    }
  }
}

@include mobile-wide {
  .client {
    .client-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      .client-item {
        width: 100%;
      }
    }
  }
}
```

<br/>
<br/>

### 3-11. Positioned element

![doggy-position](https://github.com/cona-tus/js-dog-web/assets/90844424/a1940955-046a-4db4-a50d-dccbf259d323)

Dog Care fee를 나타내는 영역에 position 속성을 이용해 레이어가 겹쳐진 효과를 적용합니다. `fee-column-wrapper`에 `relative`를 사용해 기준점을 만들고, `fee-column--left`와 `fee-column--right`에 `absolute`를 적용해서 배치합니다.

```scss
    .fee-container {
      width: 100%;
      display: block;

      .fee-column-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        position: relative;

// ...
```

<br/>

이때 top과 transform을 활용해서 요소를 가운데로 배치합니다. 그리고 `fee-column--center`에는 `relative`와 `z-index`를 적용해서 다른 요소들 위에 띄워서 배치합니다. 이렇게 하면 겹쳐진 효과를 낼 수 있습니다.

```scss
        .fee-column--left {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(0, -50%) scale(0.8);
          opacity: 0.8;
          box-shadow: $box-shadow-200;
        }

        .fee-column--right {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(0, -50%) scale(0.8);
          opacity: 0.8;
          box-shadow: $box-shadow-200;
        }

        .fee-column--center {
          position: relative;
          z-index: 2;
          box-shadow: $box-shadow-300;
        }

        .fee-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          background-color: $color-white;
          border-radius: 2rem;
          padding: 3rem;

// 다른 코드...
        }
      }
    }
```

<br/>
<br/>

### 3-12. Responsive Web Design

![doggy-respon](https://github.com/cona-tus/js-dog-web/assets/90844424/d7352707-c07a-4e8c-a6a3-70f371565dba)

다양한 디바이스와 화면 크기에서 웹사이트를 원활하게 이용할 수 있도록 반응형 웹디자인을 적용했습니다.

<br/>

변수와 mixin을 사용해 미디어 쿼리를 편리하게 정의합니다.

```scss
$breakpoint-mobile: 478px;
$breakpoint-mobile-wide: 592px;
$breakpoint-tablet: 768px;
$breakpoint-tablet-wide: 912px;
$breakpoint-desktop: 1024px;
$breakpoint-desktop-wide: 1280px;
```

<br/>

mixin을 통해 각 미디어 쿼리 범위에 맞는 스타일을 쉽게 적용할 수 있게 됩니다.

```scss
@mixin mobile {
  @media (max-width: #{$breakpoint-mobile}) {
    @content;
  }
}

@mixin mobile-wide {
  @media (max-width: #{$breakpoint-mobile-wide - 1px}) {
    @content;
  }
}

@mixin tablet {
  @media (max-width: #{$breakpoint-tablet}) {
    @content;
  }
}

@mixin tablet-wide {
  @media (max-width: #{$breakpoint-tablet-wide}) {
    @content;
  }
}

@mixin desktop {
  @media (max-width: #{$breakpoint-desktop}) {
    @content;
  }
}

@mixin desktop-wide {
  @media (max-width: #{$breakpoint-desktop-wide}) {
    @content;
  }
}
```

<br/>
<br/>

## 4. Trouble shooting

### 4-1. Landscape Mode

![doggy-landscape](https://github.com/cona-tus/js-dog-web/assets/90844424/ed4e1202-9a5a-464d-a338-865d872059a4)

#### 1. 문제 상황

landscape 모드로 전환 시 슬라이드쇼의 디자인이 깨지는 문제가 있었습니다.

<br/>

#### 2. 해결 방법

이러한 문제가 발생하는 이유는 `vh` 단위를 사용하여 영역의 높이를 설정했기 때문입니다. 이를 해결하기 위해 resize 이벤트가 발생하면 슬라이드 요소의 높이를 동적으로 조정합니다. 즉, `window.innerHeight`를 높이로 설정하여 영역이 뷰포트에 맞게 자동으로 변경되도록 합니다. 그리고 이 높이가 500px 보다 작을 경우에만 `landscape` 클래스를 추가하여 스타일이 다르게 적용되도록 만듭니다.

```js
const handleTextScale = () => {
  mainSlideTextWrapperItems.forEach((item) => {
    if (window.innerHeight < 500) {
      item.classList.add('landscape');
    } else {
      item.classList.remove('landscape');
    }
  });
};

const handleResize = (element) => {
  element.style.height = `${window.innerHeight}px`;
};

window.addEventListener('resize', () => {
  handleResize(mainSlide);
  handleTextScale();

  // 다른 코드...
});
```

<br/>

landscape 모드가 되면 `slideshow-swiper-slide-text`의 크기를 줄여서 화면에 넘치지 않도록 설정합니다.

```scss
.slideshow-swiper-slide-text-wrapper.landscape {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, 0);

  .slideshow-swiper-slide-text {
    transform: scale(0.6);
  }
}
```

<br/>
<br/>

[맨위로 이동하기](#-강아지-케어-서비스-웹사이트-doggy-프로젝트)
