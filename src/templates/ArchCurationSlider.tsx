'use client';

import { useState } from 'react';
import Link from 'next/link';
import { STORE_CATEGORIES } from '@/data/marketData';

export const ArchCurationSlider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const categories = STORE_CATEGORIES;

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section className="bg-slate-50 py-14 sm:py-20 border-t border-slate-200/80">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* 상단 타이틀 및 슬라이더 카운터 */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-black text-amber-600 uppercase tracking-wider">
              AUTHENTIC MARKET FLAVORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight">
              전통시장의 진짜 맛과 멋! 테마별 골목 탐방
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              상점 카테고리별 대표 먹거리와 제철 신선식품을 만나보세요.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs font-bold text-slate-500 hidden sm:block">
              <span className="text-slate-900 font-extrabold">{currentIdx + 1}</span>
              <span> / </span>
              <span>{categories.length}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                className="flex size-9 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50 hover:border-amber-400 focus:outline-none"
                aria-label="이전 카테고리"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="flex size-9 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50 hover:border-amber-400 focus:outline-none"
                aria-label="다음 카테고리"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 4열 아치형(Arch) 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/stores/${cat.slug}`}
              className="group flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300"
            >
              {/* 상단 둥근 아치(Arch) 형태 이미지 컨테이너 */}
              <div className="relative w-full h-72 sm:h-80 rounded-t-[5rem] rounded-b-3xl overflow-hidden shadow-md shadow-slate-200 bg-slate-200 border-2 border-white">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* 뱃지 */}
                <span className="absolute top-6 left-1/2 -translate-x-1/2 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-black text-slate-900 shadow-sm">
                  {cat.icon} {cat.badge}
                </span>

                <div className="absolute bottom-4 inset-x-4 text-white">
                  <h3 className="text-xl font-black">{cat.name}</h3>
                  <p className="text-xs text-amber-300 font-semibold mt-0.5">{cat.countText}</p>
                </div>
              </div>

              {/* 하단 설명 */}
              <div className="mt-4 px-2">
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 mt-2 group-hover:underline">
                  상점 목록 보기 ➔
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
