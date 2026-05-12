/* ============================================================
   STP dance academy LP — 共通 JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. スクロールリビール（IntersectionObserver）
  ---------------------------------------------------------- */
  const revealClasses = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale'];
  const revealEls = document.querySelectorAll(revealClasses.join(','));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target); // 一度だけ発火
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));


  /* ----------------------------------------------------------
     2. ヘッダー スクロール時にスタイル変更
  ---------------------------------------------------------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }


  /* ----------------------------------------------------------
     3. 軽量パララックス（ヒーローセクション背景）
  ---------------------------------------------------------- */
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length > 0) {
    const handleParallax = () => {
      const scrollY = window.scrollY;
      parallaxEls.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.3;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
  }


  /* ----------------------------------------------------------
     4. FAQ アコーディオン
  ---------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // 他を閉じる
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const a = other.querySelector('.faq-answer');
          if (a) a.style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });


  /* ----------------------------------------------------------
     5. スムーズスクロール（ページ内リンク）
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 72; // ヘッダー高さ分
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  /* ----------------------------------------------------------
     6. フォーム ダミー送信
  ---------------------------------------------------------- */
  const forms = document.querySelectorAll('.contact-form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = '送信しました！';
        btn.disabled = true;
        btn.style.opacity = '0.6';
      }
    });
  });


  /* ----------------------------------------------------------
     7. カード hover — 3D チルト（軽量）
  ---------------------------------------------------------- */
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect   = card.getBoundingClientRect();
      const cx     = rect.width  / 2;
      const cy     = rect.height / 2;
      const dx     = (e.clientX - rect.left - cx) / cx;
      const dy     = (e.clientY - rect.top  - cy) / cy;
      card.style.transform = `perspective(600px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

});
