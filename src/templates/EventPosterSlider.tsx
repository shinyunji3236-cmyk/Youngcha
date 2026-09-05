'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EVENTS_DATA } from '@/data/marketData';

export const EventPosterSlider = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const events = EVENTS_DATA;

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section className="bg-white py-14 sm:py-20 border-t border-slate-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* 헤더 및 컨트롤러 */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-black text-rose-600 uppercase tracking-wider">
              LIVE EVENTS & FESTIVALS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight">
              진행중인 시장 축제 · 야시장 · 혜택 행사
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              신나는 공연과 맛있는 먹거리, 풍성한 환급 이벤트 소식을 확인하세요.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs font-bold text-slate-500 hidden sm:block">
              <span className="text-slate-900 font-extrabold">{activeIdx + 1}</span>
              <span> / </span>
              <span>{events.length}</span>
            </div>
            <Link
              href="/today"
              className="text-xs font-bold text-slate-600 hover:text-rose-600 hidden sm:inline-flex items-center gap-1"
            >
              <span>전체보기</span>
              <span>&gt;</span>
            </Link>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                className="flex size-9 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50 hover:border-rose-400 focus:outline-none"
                aria-label="이전 행사"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="flex size-9 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50 hover:border-rose-400 focus:outline-none"
                aria-label="다음 행사"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 2열/3열 세로 포스터 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((evt) => (
            <Link
              key={evt.id}
              href={`/today/${evt.slug}`}
              className="group flex flex-col sm:flex-row bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-rose-300 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* 포스터 썸네일 */}
              <div className="relative w-full sm:w-56 h-64 sm:h-auto bg-slate-900 shrink-0 overflow-hidden">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* 상태 뱃지 */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-rose-600 px-3 py-1 text-xs font-black text-white shadow-md">
                  <span className="size-1.5 rounded-full bg-white animate-pulse"></span>
                  {evt.status}
                </span>
              </div>

              {/* 포스터 세부 내용 */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-bold text-rose-600">
                    {evt.category}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1.5 group-hover:text-rose-600 transition-colors leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {evt.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 space-y-1.5 text-xs text-slate-500">
                  <p className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-700">📅 일정:</span>
                    <span>{evt.dateRange}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-700">📍 장소:</span>
                    <span>{evt.location}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
