const body = document.querySelector('.body');
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
const mainSlide = document.querySelector('.slideshow');
const mainSlideHeight = mainSlide.getBoundingClientRect().height;
const side = document.querySelector('.side');
const sideCloseBtn = side.querySelector('.side-close-btn');
const subMenuOpenBtn = document.querySelector('.sub-menu-open-btn');
const mobileCloseBtn = document.querySelector('.mobile-close-btn');
const mobileHeader = document.querySelector('.mobile-header');
const fullScreen = document.querySelector('.full-screen');
const fullScreenItems = document.querySelectorAll('.full-screen-menu-item');
const faqItems = document.querySelectorAll('.faq-accordion-item');
const clientCountItems = document.querySelectorAll('.client-item__count');
const testimonial = document.querySelector('.testimonial');
const cursor = document.querySelector('.cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');
const mainSlideTextWrapperItems = mainSlide.querySelectorAll(
  '.slideshow-swiper-slide-text-wrapper'
);

// scroll-to-top 나타나기
document.addEventListener('scroll', () => {
  if (window.scrollY < mainSlideHeight / 3) {
    scrollToTopBtn.classList.remove('scroll-btn--visible');
  } else {
    scrollToTopBtn.classList.add('scroll-btn--visible');
  }
});

// 스크롤 맨 위로 이동
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// sidebar 여닫기 토글
sideCloseBtn.addEventListener('click', () => {
  side.classList.add('side--close');
});

subMenuOpenBtn.addEventListener('click', () => {
  side.classList.remove('side--close');

  setTimeout(() => {
    sideCloseBtn.focus();
  }, 500);
});

// mobile-header 여닫기 토글, full-screen 나타나기
mobileCloseBtn.addEventListener('click', () => {
  mobileHeader.classList.toggle('mobile--close');
  body.classList.toggle('full-screen--open');
  fullScreen.classList.toggle('full-screen--open');
});

// full-screen 아코디언, faq 아코디언
const handleAccordionClick = (category, categoryItems, clickedItem) => {
  categoryItems.forEach((otherItem) => {
    if (otherItem !== clickedItem) {
      otherItem.classList.remove(`${category}--active`);
    }
  });

  clickedItem.classList.toggle(`${category}--active`);
};

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

// client 숫자 카운팅 애니메이션
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

ScrollOut({
  threshold: 0.7,
});

// testimonial 커서 변경
window.addEventListener('load', () => {
  let x = 0;
  let y = 0;
  let targetX = 0;
  let targetY = 0;
  const speed = 0.1;

  testimonial.addEventListener('mousemove', (e) => {
    x = e.pageX;
    y = e.pageY;
  });
  testimonial.addEventListener('mouseenter', () => {
    cursorCircle.classList.add('cursor--visible');
  });
  testimonial.addEventListener('mouseleave', () => {
    cursorCircle.classList.remove('cursor--visible');
  });

  const loop = () => {
    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;

    cursor.style.transform = `translate(${targetX}px, ${targetY}px)`;
    window.requestAnimationFrame(loop);
  };

  loop();
});

// footer 현재 년도
const getCurrentYear = () => {
  const footerYear = document.querySelector('.footer__year');
  const today = new Date();
  const year = today.getFullYear();
  footerYear.textContent = year;
};

// landscape 모드
const handleTextScale = () => {
  mainSlideTextWrapperItems.forEach((item) => {
    if (window.innerHeight < 500) {
      item.classList.add('landscape');
    } else {
      item.classList.remove('landscape');
    }
  });
};

// resize viewport height
const handleResize = (element) => {
  element.style.height = `${window.innerHeight}px`;
};

window.addEventListener('resize', () => {
  handleResize(mainSlide);
  handleTextScale();

  if (window.innerWidth > 911) {
    mobileHeader.classList.add('mobile--close');
    body.classList.remove('full-screen--open');
    fullScreen.classList.remove('full-screen--open');
  }
});

const init = () => {
  getCurrentYear();
  handleTextScale();
  handleResize(mainSlide);
};

init();
