'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useState } from 'react';



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
    <div className="
      space-y-20 bg-slate-50 py-16
      sm:space-y-28 sm:py-24
    "
    >
      {/* 카카오 지도 SDK 스크립트 주입 (기존 로직 보존) */}
      <Script
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=4efb8c65236157929a6a6ce2ed634b77&autoload=false"
        strategy="afterInteractive"
        onLoad={() => setIsLoaded(true)}
      />

      <div className="
        mx-auto max-w-7xl space-y-20 px-4
        sm:space-y-28 sm:px-6
        lg:px-8
      "
      >
        {/* ============================================================ */}
        {/* 1. 대한민국 구석구석 테마 여행 지도 & 추천 코스 섹션 */}
        {/* ============================================================ */}
        <section id="map" className="scroll-mt-28">
          <div className="
            mb-8 flex flex-col justify-between gap-4
            md:flex-row md:items-end
          "
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="
                  inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5
                  text-xs font-bold text-blue-800
                "
                >
                  THEME TOUR
                </span>
                <span className="
                  text-xs font-bold tracking-wider text-slate-500 uppercase
                "
                >
                  Directions & Map
                </span>
              </div>
              <h2 className="
                mt-2 text-2xl font-extrabold tracking-tight text-slate-900
                sm:text-4xl
              "
              >
                📍 영등포 전통시장 오시는 길 & 추천 탐방 코스
              </h2>
              <p className="
                mt-2 text-sm text-slate-600
                sm:text-base
              "
              >
                지하철 1호선 영등포역 인근 위치! 알찬 골목 탐방을 위한 테마별 추천 여행 코스를 확인하세요.
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
            {/* 카카오 지도 뷰어 컨테이너 */}
            <div className="
              relative min-h-[380px] overflow-hidden rounded-3xl border
              border-slate-200 bg-white shadow-lg shadow-slate-200/60
              sm:min-h-[440px]
              lg:col-span-2
            "
            >
              {!mapRendered && (
                <div className="
                  absolute inset-0 z-10 flex flex-col items-center
                  justify-center bg-slate-100 text-slate-500
                "
                >
                  <div className="
                    mb-3 size-9 animate-spin rounded-full border-b-2
                    border-blue-600
                  "
                  >
                  </div>
                  <p className="text-sm font-semibold">카카오 지도를 불러오는 중입니다...</p>
                </div>
              )}
              <div
                id="kakao-map-home"
                style={{ width: '100%', height: '100%', minHeight: '380px' }}
              />
              {/* 지도 위 오버레이 칩 */}
              <div className="
                absolute bottom-4 left-4 z-10 hidden items-center gap-2
                rounded-2xl border border-slate-100 bg-white/95 px-4 py-2
                text-xs font-bold text-slate-800 shadow-md backdrop-blur-md
                sm:flex
              "
              >
                <span className="size-2 animate-ping rounded-full bg-blue-600"></span>
                <span>서울특별시 영등포구 영등포로 225</span>
              </div>
            </div>

            {/* 추천 코스 카드 리스트 (대한민국 구석구석 코스 UI) */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="
                group rounded-3xl border border-slate-200/80 bg-white p-6
                shadow-md shadow-slate-200/50 transition-all duration-300
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
                <h3 className="
                  mt-3 text-lg font-black text-slate-900 transition-colors
                  group-hover:text-blue-600
                "
                >
                  입이 즐거운 먹거리 탐방 코스
                </h3>
                <div className="
                  mt-3 rounded-2xl border border-slate-100 bg-slate-50 p-3.5
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
                    전통 꽈배기
                    {' '}
                    <span className="text-blue-600">➔</span>
                    {' '}
                    시장 핫바
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  영등포 시장의 대표 먹거리를 차례로 맛보는 든든한 미식 힐링 코스입니다.
                </p>
              </div>

              <div className="
                group rounded-3xl border border-slate-200/80 bg-white p-6
                shadow-md shadow-slate-200/50 transition-all duration-300
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
                <h3 className="
                  mt-3 text-lg font-black text-slate-900 transition-colors
                  group-hover:text-amber-700
                "
                >
                  알뜰장보기 & 볼거리 코스
                </h3>
                <div className="
                  mt-3 rounded-2xl border border-slate-100 bg-slate-50 p-3.5
                "
                >
                  <p className="text-xs/relaxed font-semibold text-slate-700">
                    신선 청과 코너
                    {' '}
                    <span className="text-amber-600">➔</span>
                    {' '}
                    건어물 상가
                    {' '}
                    <span className="text-amber-600">➔</span>
                    {' '}
                    전통 의류 도소매
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  제철 과일과 건어물, 정겨운 의류 잡화를 합리적인 가격에 장보는 실속 코스입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. 대한민국 구석구석 시그니처 큐레이션: 3대 테마 미리보기 그리드 */}
        {/* ============================================================ */}
        <section className="space-y-10">
          {/* 섹션 헤더 */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="
              inline-flex items-center gap-1 rounded-full border
              border-blue-200/50 bg-blue-50 px-3.5 py-1 text-xs font-bold
              text-blue-700
            "
            >
              EXPLORE TRADITIONAL MARKET
            </span>
            <h2 className="
              mt-3 text-2xl font-extrabold tracking-tight text-slate-900
              sm:text-4xl
            "
            >
              대한민국 구석구석에서 전하는 영등포 이야기
            </h2>
            <p className="
              mt-2 text-sm text-slate-600
              sm:text-base
            "
            >
              점포별 영업 정보부터 상인들의 진솔한 스토리, 생생한 야시장 소식을 만나보세요.
            </p>
          </div>

          {/* 3열 카드 그리드 */}
          <div className="
            grid grid-cols-1 gap-6
            sm:gap-8
            md:grid-cols-3
          "
          >
            {/* 1) 점포 안내 카드 */}
            <Link
              href="/stores"
              className="
                group flex flex-col justify-between rounded-3xl border
                border-slate-200/80 bg-white p-7 shadow-md shadow-slate-200/60
                transition-all duration-300
                hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl
              "
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="
                    flex size-14 items-center justify-center rounded-2xl
                    bg-blue-50 text-3xl transition-transform
                    group-hover:scale-110
                  "
                  >
                    🏪
                  </div>
                  <span className="
                    rounded-full border border-blue-100 bg-blue-50 px-3 py-1
                    text-xs font-bold text-blue-700
                  "
                  >
                    4개 카테고리
                  </span>
                </div>
                <h3 className="
                  mt-6 text-xl font-black text-slate-900 transition-colors
                  group-hover:text-blue-600
                "
                >
                  점포별 영업 정보
                </h3>
                <p className="mt-2 text-sm/relaxed text-slate-600">
                  떡/제과, 정육/수산, 청과/야채, 식당/카페 등 시장 내 다양한 점포 위치와 영업 정보를 손쉽게 확인하세요.
                </p>
              </div>
              <div className="
                mt-8 flex items-center justify-between border-t border-slate-100
                pt-4 text-xs font-bold text-blue-600
              "
              >
                <span>상점 디렉토리 둘러보기</span>
                <span className="
                  text-base transition-transform
                  group-hover:translate-x-1
                "
                >
                  ➔
                </span>
              </div>
            </Link>

            {/* 2) 시장 이야기 카드 */}
            <Link
              href="/stories"
              className="
                group flex flex-col justify-between rounded-3xl border
                border-slate-200/80 bg-white p-7 shadow-md shadow-slate-200/60
                transition-all duration-300
                hover:-translate-y-2 hover:border-amber-300 hover:shadow-2xl
              "
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="
                    flex size-14 items-center justify-center rounded-2xl
                    bg-amber-50 text-3xl transition-transform
                    group-hover:scale-110
                  "
                  >
                    📖
                  </div>
                  <span className="
                    rounded-full border border-amber-100 bg-amber-50 px-3 py-1
                    text-xs font-bold text-amber-700
                  "
                  >
                    스토리 매거진
                  </span>
                </div>
                <h3 className="
                  mt-6 text-xl font-black text-slate-900 transition-colors
                  group-hover:text-amber-600
                "
                >
                  시장 이야기 (점포 스토리)
                </h3>
                <p className="mt-2 text-sm/relaxed text-slate-600">
                  30년 전통 할머니 떡집부터 감성 레트로 카페, 2대째 축산 상점까지 상인들의 정성 어린 삶의 이야기를 들려드립니다.
                </p>
              </div>
              <div className="
                mt-8 flex items-center justify-between border-t border-slate-100
                pt-4 text-xs font-bold text-amber-600
              "
              >
                <span>감성 스토리 읽기</span>
                <span className="
                  text-base transition-transform
                  group-hover:translate-x-1
                "
                >
                  ➔
                </span>
              </div>
            </Link>

            {/* 3) 오늘의 시장 카드 */}
            <Link
              href="/today"
              className="
                group flex flex-col justify-between rounded-3xl border
                border-slate-200/80 bg-white p-7 shadow-md shadow-slate-200/60
                transition-all duration-300
                hover:-translate-y-2 hover:border-rose-300 hover:shadow-2xl
              "
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="
                    flex size-14 items-center justify-center rounded-2xl
                    bg-rose-50 text-3xl transition-transform
                    group-hover:scale-110
                  "
                  >
                    🎉
                  </div>
                  <span className="
                    inline-flex items-center gap-1 rounded-full border
                    border-rose-100 bg-rose-50 px-3 py-1 text-xs font-bold
                    text-rose-700
                  "
                  >
                    <span className="
                      size-1.5 animate-pulse rounded-full bg-rose-600
                    "
                    >
                    </span>
                    LIVE 진행중
                  </span>
                </div>
                <h3 className="
                  mt-6 text-xl font-black text-slate-900 transition-colors
                  group-hover:text-rose-600
                "
                >
                  오늘의 시장 & 야시장 소식
                </h3>
                <p className="mt-2 text-sm/relaxed text-slate-600">
                  매주 금요일 밤 펼쳐지는 달빛 야시장 & 버스킹 공연과 온누리상품권 즉시 환급 이벤트 소식을 확인하세요.
                </p>
              </div>
              <div className="
                mt-8 flex items-center justify-between border-t border-slate-100
                pt-4 text-xs font-bold text-rose-600
              "
              >
                <span>행사 & 이벤트 소식 보기</span>
                <span className="
                  text-base transition-transform
                  group-hover:translate-x-1
                "
                >
                  ➔
                </span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
