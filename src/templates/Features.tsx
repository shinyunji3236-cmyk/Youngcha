'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { QuickServiceBar } from './QuickServiceBar';
import { AIStorySlider } from './AIStorySlider';
import { CourseCardSlider } from './CourseCardSlider';
import { ArchCurationSlider } from './ArchCurationSlider';
import { EventPosterSlider } from './EventPosterSlider';

export const Features = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mapRendered, setMapRendered] = useState(false);

  const initMap = () => {
    if (typeof window === 'undefined') {
      return;
    }

    if ((window as any).kakao && (window as any).kakao.maps) {
      (window as any).kakao.maps.load(() => {
        const container = document.getElementById('kakao-map-home');
        if (!container) {
          return;
        }
        const options = {
          center: new (window as any).kakao.maps.LatLng(37.5156, 126.9073),
          level: 3,
        };
        const map = new (window as any).kakao.maps.Map(container, options);
        const marker = new (window as any).kakao.maps.Marker({
          position: new (window as any).kakao.maps.LatLng(37.5156, 126.9073),
        });
        marker.setMap(map);
        map.relayout();
        setMapRendered(true);
      });
    }
  };

  useEffect(() => {
    if (isLoaded) {
      initMap();
    }
  }, [isLoaded]);

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
      <section id="map" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 scroll-mt-24">
        {/* 카카오 지도 SDK 스크립트 주입 (기존 보존) */}
        <Script
          src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=4efb8c65236157929a6a6ce2ed634b77&autoload=false"
          strategy="afterInteractive"
          onLoad={() => setIsLoaded(true)}
        />

        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-black text-blue-600 uppercase tracking-wider">
                Directions & Map
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
                📍 영등포 전통시장 오시는 길 & 실시간 위치
              </h2>
              <p className="text-slate-600 mt-1 text-sm sm:text-base">
                지하철 1호선 영등포역 인근! 알찬 골목 탐방을 위한 실시간 위치와 테마별 추천 코스를 확인하세요.
              </p>
            </div>
            <Link
              href="/map"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors self-start md:self-auto"
            >
              <span>지도 크게보기</span>
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* 카카오 지도 뷰어 */}
            <div className="lg:col-span-2 rounded-3xl min-h-[380px] sm:min-h-[440px] overflow-hidden relative shadow-lg shadow-slate-200/60 border border-slate-200 bg-white">
              {!mapRendered && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-100 text-slate-500">
                  <div className="animate-spin rounded-full h-9 w-9 border-b-2 border-blue-600 mb-3"></div>
                  <p className="text-sm font-semibold">카카오 지도를 불러오는 중입니다...</p>
                </div>
              )}
              <div
                id="kakao-map-home"
                style={{ width: '100%', height: '100%', minHeight: '380px' }}
              />
              <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-2 text-xs font-bold text-slate-800 shadow-md backdrop-blur-md border border-slate-100">
                <span className="size-2 rounded-full bg-blue-600 animate-ping"></span>
                <span>서울특별시 영등포구 영등포로 225</span>
              </div>
            </div>

            {/* 추천 코스 요약 패널 */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="rounded-3xl bg-white p-6 shadow-md shadow-slate-200/50 border border-slate-200/80 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700">
                    COURSE 01
                  </span>
                  <span className="text-xs font-bold text-slate-400">⏱️ 약 1시간 30분</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mt-3">
                  입이 즐거운 먹거리 탐방 코스
                </h3>
                <div className="mt-3 rounded-2xl bg-slate-50 p-3 border border-slate-100">
                  <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                    순대골목 <span className="text-blue-600">➔</span> 수제만두 <span className="text-blue-600">➔</span> 꽈배기 <span className="text-blue-600">➔</span> 핫바
                  </p>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  영등포 시장 대표 노포 먹거리를 순서대로 맛보는 미식 코스입니다.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-md shadow-slate-200/50 border border-slate-200/80 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-800">
                    COURSE 02
                  </span>
                  <span className="text-xs font-bold text-slate-400">⏱️ 약 2시간</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mt-3">
                  알뜰장보기 & 볼거리 코스
                </h3>
                <div className="mt-3 rounded-2xl bg-slate-50 p-3 border border-slate-100">
                  <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                    신선 청과 <span className="text-amber-600">➔</span> 건어물 상가 <span className="text-amber-600">➔</span> 의류 도소매
                  </p>
                </div>
                <p className="text-xs text-slate-500 mt-3">
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
