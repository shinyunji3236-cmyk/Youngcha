'use client';

import Link from 'next/link';
import { AIStorySlider } from './AIStorySlider';
import { ArchCurationSlider } from './ArchCurationSlider';
import { CourseCardSlider } from './CourseCardSlider';
import { EventPosterSlider } from './EventPosterSlider';
import { KakaoMapEmbed } from './KakaoMapEmbed';
import { QuickServiceBar } from './QuickServiceBar';

export const Features = () => {
  return (
    <div className="bg-slate-50">
      {/* 1. 퀵 서비스 아이콘 바 (가로 슬라이딩) */}
      <QuickServiceBar />

      {/* 2. AI 상점 & 스토리 후기 요약 캐러셀 */}
      <AIStorySlider />

      {/* 3. 추천 코스 슬라이더 */}
      <CourseCardSlider />

      {/* 4. 아치형 테마 상점 큐레이션 슬라이더 */}
      <ArchCurationSlider />

      {/* 5. 진행중인 야시장 & 축제 포스터 슬라이더 */}
      <EventPosterSlider />

      {/* 6. 카카오 지도 & 오시는 길 섹션 */}
      <section
        id="map"
        className="
          scroll-mt-24 border-t border-slate-200/80 bg-slate-50 py-16
          sm:py-24
        "
      >
        <div className="
          mx-auto max-w-7xl px-4
          sm:px-6
          lg:px-8
        "
        >
          <div className="
            mb-8 flex flex-col justify-between gap-4
            md:flex-row md:items-end
          "
          >
            <div>
              <span className="
                text-xs font-black tracking-wider text-blue-600 uppercase
              "
              >
                Directions & Map
              </span>
              <h2 className="
                mt-1 text-2xl font-extrabold tracking-tight text-slate-900
                sm:text-4xl
              "
              >
                📍 영등포 전통시장 오시는 길 & 실시간 위치
              </h2>
              <p className="
                mt-1 text-sm text-slate-600
                sm:text-base
              "
              >
                지하철 1호선 영등포역 인근! 알찬 골목 탐방을 위한 실시간 위치와 테마별 추천 코스를 확인하세요.
              </p>
            </div>
            <Link
              href="/map"
              className="
                inline-flex items-center gap-1.5 self-start text-sm font-bold
                text-blue-600 transition-colors
                hover:text-blue-700
                md:self-auto
              "
            >
              <span>지도 크게보기</span>
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="
            grid grid-cols-1 items-stretch gap-8
            lg:grid-cols-3
          "
          >
            {/* 카카오 지도 뷰어 (HTML 퍼가기 태그 연동) */}
            <div className="lg:col-span-2">
              <KakaoMapEmbed minHeight="min-h-[360px] sm:min-h-[440px]" />
            </div>

            {/* 추천 코스 요약 패널 */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="
                rounded-3xl border border-slate-200/80 bg-white p-6 shadow-md
                shadow-slate-200/50 transition-all duration-300
                hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl
              "
              >
                <div className="flex items-center justify-between">
                  <span className="
                    inline-flex items-center rounded-full bg-blue-100 px-3 py-1
                    text-xs font-black text-blue-700
                  "
                  >
                    COURSE 01
                  </span>
                  <span className="text-xs font-bold text-slate-400">⏱️ 약 1시간 30분</span>
                </div>
                <h3 className="mt-3 text-lg font-black text-slate-900">
                  입이 즐거운 먹거리 탐방 코스
                </h3>
                <div className="
                  mt-3 rounded-2xl border border-slate-100 bg-slate-50 p-3
                "
                >
                  <p className="text-xs/relaxed font-semibold text-slate-700">
                    순대골목
                    {' '}
                    <span className="text-blue-600">➔</span>
                    {' '}
                    수제만두
                    {' '}
                    <span className="text-blue-600">➔</span>
                    {' '}
                    꽈배기
                    {' '}
                    <span className="text-blue-600">➔</span>
                    {' '}
                    핫바
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  영등포 시장 대표 노포 먹거리를 순서대로 맛보는 미식 코스입니다.
                </p>
              </div>

              <div className="
                rounded-3xl border border-slate-200/80 bg-white p-6 shadow-md
                shadow-slate-200/50 transition-all duration-300
                hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl
              "
              >
                <div className="flex items-center justify-between">
                  <span className="
                    inline-flex items-center rounded-full bg-amber-100 px-3 py-1
                    text-xs font-black text-amber-800
                  "
                  >
                    COURSE 02
                  </span>
                  <span className="text-xs font-bold text-slate-400">⏱️ 약 2시간</span>
                </div>
                <h3 className="mt-3 text-lg font-black text-slate-900">
                  알뜰장보기 & 볼거리 코스
                </h3>
                <div className="
                  mt-3 rounded-2xl border border-slate-100 bg-slate-50 p-3
                "
                >
                  <p className="text-xs/relaxed font-semibold text-slate-700">
                    신선 청과
                    {' '}
                    <span className="text-amber-600">➔</span>
                    {' '}
                    건어물 상가
                    {' '}
                    <span className="text-amber-600">➔</span>
                    {' '}
                    의류 도소매
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  제철 과일과 건어물, 생활 잡화를 알뜰하게 쇼핑하는 실속 코스입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
