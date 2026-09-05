'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: '오시는 길', href: '/map', desc: '위치 안내 및 추천 탐방 코스', icon: '📍' },
    { label: '점포안내', href: '/stores', desc: '카테고리별 상점 & 먹거리 정보', icon: '🏪' },
    { label: '시장이야기', href: '/stories', desc: '상인들의 정겨운 삶과 스토리', icon: '📖' },
    { label: '오늘의시장', href: '/today', desc: '야시장 & 실시간 문화 공연 소식', icon: '🎉' },
  ];

  return (
    <>
      {/* 1. 상단 유틸리티 배너 (대한민국 구석구석 공공 포털 감성) */}
      <div className="
        hidden border-b border-slate-800 bg-slate-900 px-4 py-1.5 text-xs
        text-slate-300
        sm:block
      "
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="
              inline-flex items-center gap-1 rounded-sm bg-blue-600 px-1.5
              py-0.5 text-[10px] font-bold tracking-wider text-white
            "
            >
              KOREA TRIP
            </span>
            <span className="font-medium text-slate-300">
              대한민국 구석구석 테마 여행 · 정과 활기가 넘치는 영등포 전통시장
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <span className="
                inline-block size-1.5 rounded-full bg-emerald-400
              "
              >
              </span>
              오늘 시장 정상영업
            </span>
            <span className="text-slate-600">|</span>
            <span>고객안내센터: 02-2634-1388</span>
          </div>
        </div>
      </div>

      {/* 2. 메인 GNB 헤더 */}
      <header className="
        sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-xs
        backdrop-blur-md transition-all
      "
      >
        <div className="
          mx-auto flex h-20 max-w-7xl items-center justify-between px-4
          sm:px-6
          lg:px-8
        "
        >
          {/* 로고 영역 */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="
              flex size-11 items-center justify-center rounded-2xl
              bg-linear-to-tr from-blue-700 via-blue-600 to-sky-500 text-white
              shadow-md shadow-blue-500/20 transition-transform
              group-hover:scale-105
            "
            >
              <span className="text-2xl">🏛️</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="
                  text-xl font-black tracking-tight text-slate-900
                  transition-colors
                  group-hover:text-blue-600
                  sm:text-2xl
                "
                >
                  영등포 전통시장
                </span>
                <span className="
                  hidden rounded-md border border-blue-200/60 bg-blue-50 px-1.5
                  py-0.5 text-[11px] font-extrabold text-blue-700
                  sm:inline-block
                "
                >
                  구석구석
                </span>
              </div>
              <span className="
                text-[11px] font-bold tracking-wider text-slate-500
              "
              >
                YEONGDEUNGPO TRADITIONAL MARKET
              </span>
            </div>
          </Link>

          {/* 데스크탑 메인 내비게이션 */}
          <nav className="
            hidden items-center gap-1
            md:flex
            lg:gap-2
          "
          >
            {navItems.map((item) => {
              const isActive = pathname?.includes(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group relative rounded-xl px-4 py-2.5 text-base font-bold
                    transition-all duration-200
                    ${
                isActive
                  ? 'bg-blue-50/70 font-extrabold text-blue-600'
                  : `
                    text-slate-700
                    hover:bg-slate-50 hover:text-blue-600
                  `
                }
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <span className="
                      absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2
                      rounded-full bg-blue-600
                    "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 우측 유틸리티 & 모바일 햄버거 토글 버튼 */}
          <div className="flex items-center gap-3">
            <Link
              href="/map"
              className="
                hidden items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2
                text-xs font-bold text-white shadow-sm shadow-blue-600/30
                transition-all
                hover:bg-blue-700
                active:scale-95
                lg:inline-flex
              "
            >
              <span>길찾기 바로가기</span>
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* 모바일 햄버거 메뉴 버튼 */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
                inline-flex size-11 items-center justify-center rounded-xl
                border border-slate-200 bg-white text-slate-700
                hover:bg-slate-50 hover:text-slate-900
                focus:ring-2 focus:ring-blue-500 focus:outline-none
                md:hidden
              "
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen
                ? (
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                : (
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
            </button>
          </div>
        </div>
      </header>

      {/* 3. 모바일 반응형 슬라이드오버 네비게이션 드로어 */}
      {isMobileMenuOpen && (
        <div className="
          fixed inset-0 z-50
          md:hidden
        "
        >
          {/* 백드롭 딤 오버레이 */}
          <div
            className="
              fixed inset-0 animate-in bg-slate-900/60 backdrop-blur-xs
              transition-opacity fade-in
            "
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* 슬라이드 드로어 패널 */}
          <div className="
            fixed inset-y-0 right-0 z-50 flex w-full max-w-xs animate-in
            flex-col justify-between bg-white p-6 shadow-2xl duration-300
            slide-in-from-right
          "
          >
            <div>
              {/* 드로어 헤더 */}
              <div className="
                flex items-center justify-between border-b border-slate-100 pb-5
              "
              >
                <div className="flex items-center gap-2">
                  <div className="
                    flex size-9 items-center justify-center rounded-xl
                    bg-blue-600 text-lg font-bold text-white
                  "
                  >
                    🏛️
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">영등포 전통시장</h3>
                    <p className="text-[10px] font-semibold text-blue-600">대한민국 구석구석 테마관</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    rounded-lg p-2 text-slate-400
                    hover:bg-slate-100 hover:text-slate-600
                  "
                  aria-label="메뉴 닫기"
                >
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* 내비게이션 링크 리스트 */}
              <nav className="mt-6 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname?.includes(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        flex items-center gap-3 rounded-2xl p-3.5 transition-all
                        ${
                    isActive
                      ? `
                        border border-blue-100 bg-blue-50 font-bold
                        text-blue-700
                      `
                      : `
                        font-semibold text-slate-800
                        hover:bg-slate-50
                      `
                    }
                      `}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-base font-bold">{item.label}</span>
                        <span className="text-xs text-slate-400">{item.desc}</span>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* 드로어 하단 정보 */}
            <div className="
              space-y-3 border-t border-slate-100 pt-6 text-xs text-slate-500
            "
            >
              <div className="
                rounded-xl border border-slate-100 bg-slate-50 p-3.5
              "
              >
                <p className="
                  flex items-center gap-1.5 font-bold text-slate-700
                "
                >
                  <span>📞 고객상담 및 길 안내</span>
                </p>
                <p className="mt-1 text-sm font-bold text-blue-600">02-2634-1388</p>
                <p className="mt-0.5 text-[11px] text-slate-400">평일/주말 09:00 ~ 21:00 연중무휴</p>
              </div>
              <p className="text-center text-[11px] text-slate-400">
                © 영등포 전통시장 · 한국관광공사 테마마켓
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
