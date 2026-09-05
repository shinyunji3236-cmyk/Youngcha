'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TOUR_COURSES } from '@/data/marketData';

export const CourseCardSlider = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const courses = TOUR_COURSES;

  const nextCourse = () => {
    setActiveIdx((prev) => (prev + 1) % courses.length);
  };

  const prevCourse = () => {
    setActiveIdx((prev) => (prev - 1 + courses.length) % courses.length);
  };

  return (
    <section className="bg-white py-14 sm:py-20 border-t border-slate-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* 상단 섹션 타이틀 및 컨트롤러 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-black text-blue-600 uppercase tracking-wider">
              RECOMMENDED TOUR COURSE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight">
              지금 둘러보기 좋은 시장 탐방 코스 추천!
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              먹거리 탐방부터 알뜰 장보기까지 취향에 맞는 테마 코스를 즐겨보세요.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={prevCourse}
              className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-slate-50 hover:border-blue-400 focus:outline-none"
              aria-label="이전 코스"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextCourse}
              className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-slate-50 hover:border-blue-400 focus:outline-none"
              aria-label="다음 코스"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 2단/3단 대형 코스 카드 슬라이더 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <div
              key={course.id}
              className={`group relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl hover:shadow-2xl transition-all duration-300 ${
                idx === activeIdx ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* 배경 이미지 & 비네팅 */}
              <div
                className="h-80 sm:h-96 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${course.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              </div>

              {/* 상단 뱃지 */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-black shadow-md ${course.badgeColor}`}>
                  COURSE {course.courseNumber}
                </span>
                <span className="rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/20">
                  ⏱️ {course.duration}
                </span>
              </div>

              {/* 하단 코스 정보 */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                <span className="text-xs font-bold text-amber-400 tracking-wider">
                  #{course.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1 group-hover:text-blue-300 transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                {/* 코스 스팟 타임라인 */}
                <div className="mt-4 rounded-2xl bg-white/10 backdrop-blur-md p-3 border border-white/15">
                  <p className="text-xs text-slate-200 font-bold leading-relaxed line-clamp-1">
                    {course.spots.join(' ➔ ')}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <Link
                    href="/map"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-300 hover:text-white transition-colors"
                  >
                    <span>지도에서 코스 경로 확인</span>
                    <span>➔</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
