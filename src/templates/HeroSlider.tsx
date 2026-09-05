'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      tag: '대표 전통시장',
      title: '골목마다 피어나는 따뜻한 정과 맛',
      highlight: '영등포 전통시장',
      desc: '새벽을 여는 신선한 산지 직송 먹거리부터 감성 레트로 카페까지, 활력 넘치는 골목 탐방을 떠나보세요.',
      link: '/map',
      linkText: '시장 오시는 길 & 코스',
      image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=2000&q=85',
      accentColor: 'from-amber-400 to-yellow-200',
    },
    {
      id: 2,
      tag: 'LIVE 행사 안내',
      title: '불빛과 음악이 흐르는 밤의 축제',
      highlight: '금요 달빛 야시장 & 버스킹',
      desc: '매주 금요일 밤! 신나는 길거리 푸드트럭과 버스커들의 감미로운 라이브 공연이 펼쳐집니다.',
      link: '/today/night-market',
      linkText: '야시장 상세 일정 보기',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=85',
      accentColor: 'from-orange-400 to-rose-300',
    },
    {
      id: 3,
      tag: '30년 전통 노포',
      title: '매일 새벽 4시 가마솥에 불을 지피는',
      highlight: '가마솥 할머니 떡집 이야기',
      desc: '100% 국내산 찹쌀과 천연 재료만으로 빚어내는 30년 한결같은 수제 떡의 깊은 감동.',
      link: '/stories/grandma-ricecake',
      linkText: '스토리 전문 읽기',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2000&q=85',
      accentColor: 'from-blue-300 to-sky-200',
    },
    {
      id: 4,
      tag: '쇼핑 혜택 이벤트',
      title: '5만 원 이상 구매 시 1만 원 즉시 증정',
      highlight: '온누리상품권 환급 이벤트',
      desc: '영등포 전통시장에서 알뜰하게 장보고 온누리상품권 현장 환급 혜택까지 풍성하게 챙기세요.',
      link: '/today/onnuri-event',
      linkText: '환급 이벤트 안내',
      image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c6?auto=format&fit=crop&w=2000&q=85',
      accentColor: 'from-emerald-300 to-teal-200',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 슬라이드 배경 이미지 전환 */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          {/* 어두운 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />
        </div>
      ))}

      {/* 슬라이드 텍스트 콘텐츠 */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="max-w-2xl">
          {/* 상단 태그 뱃지 */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-md border border-white/20 mb-4 animate-in fade-in duration-300">
            <span className="size-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span>{slides[currentSlide]!.tag}</span>
          </div>

          {/* 메인 타이틀 */}
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight drop-shadow-md">
              {slides[currentSlide]!.title}
            </h2>
            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r ${slides[currentSlide]!.accentColor}`}>
              {slides[currentSlide]!.highlight}
            </h1>
          </div>

          {/* 설명문 */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-slate-200 leading-relaxed drop-shadow font-normal max-w-xl">
            {slides[currentSlide]!.desc}
          </p>

          {/* 링크 CTA 버튼 */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={slides[currentSlide]!.link}
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-500 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
            >
              <span>{slides[currentSlide]!.linkText}</span>
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* 우측 하단 슬라이드 컨트롤러 & 카운터 (PDF 2 메인 스타일) */}
      <div className="absolute bottom-8 right-4 sm:right-8 lg:right-12 z-20 flex items-center gap-3 rounded-2xl bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10 text-white text-xs font-bold">
        <div className="flex items-center gap-1 text-slate-300">
          <span className="text-white text-sm font-black">{currentSlide + 1}</span>
          <span>/</span>
          <span>{slides.length}</span>
        </div>
        <div className="h-3 w-px bg-white/20" />
        <button
          type="button"
          onClick={prevSlide}
          className="p-1 hover:text-blue-400 transition-colors focus:outline-none"
          aria-label="이전 슬라이드"
        >
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          className="p-1 hover:text-blue-400 transition-colors focus:outline-none"
          aria-label={isPaused ? '슬라이드 재생' : '슬라이드 정지'}
        >
          {isPaused ? (
            <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="p-1 hover:text-blue-400 transition-colors focus:outline-none"
          aria-label="다음 슬라이드"
        >
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};
