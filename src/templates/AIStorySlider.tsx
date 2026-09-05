'use client';

import { useState } from 'react';
import Link from 'next/link';
import { STORIES_DATA } from '@/data/marketData';

export const AIStorySlider = () => {
  const [scrollIdx, setScrollIdx] = useState(0);

  const stories = STORIES_DATA;

  const nextSlide = () => {
    setScrollIdx((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setScrollIdx((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* 헤더 및 슬라이드 컨트롤러 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold">
              AI
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              AI가 지금 막, 시장 상점 · 스토리 후기를 요약했어요
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="flex size-9 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50 hover:border-blue-400 focus:outline-none"
              aria-label="이전 이야기"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="flex size-9 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50 hover:border-blue-400 focus:outline-none"
              aria-label="다음 이야기"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 3단 카드 슬라이더 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, idx) => (
            <Link
              key={story.id}
              href={`/stories/${story.slug}`}
              className={`group flex flex-col justify-between rounded-3xl bg-white p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 ${
                idx === scrollIdx ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-700">
                    📖 상점 스토리
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">
                    {story.readTime}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-xs text-blue-600 font-bold mt-1">
                      {story.storeName}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100">
                  {story.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-blue-600">
                <span>전문 읽기 & 상세 메뉴</span>
                <span className="group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
