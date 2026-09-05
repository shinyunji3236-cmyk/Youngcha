'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
      {/* 1. 상단 유틸리티 배너 */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 hidden sm:block border-b border-slate-800">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white tracking-wider">
              MARKET TRIP
            </span>
            <span className="text-slate-300 font-medium">
              정과 활기가 넘치는 서울의 대표 명소 · 영등포 전통시장 공식 안내
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse"></span>
              오늘 시장 정상영업
            </span>
            <span className="text-slate-600">|</span>
            <span>고객지원센터 02-2634-1388</span>
          </div>
        </div>
      </div>

      {/* 2. 메인 GNB 헤더 */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* 로고 영역 */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span className="text-2xl">🏛️</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  영등포 전통시장
                </span>
              </div>
              <span className="text-[11px] font-bold tracking-wider text-slate-500">
                YEONGDEUNGPO TRADITIONAL MARKET
              </span>
            </div>
          </Link>

          {/* 데스크탑 메인 내비게이션 */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2.5 rounded-xl text-base font-bold transition-all duration-200 group ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/70 font-extrabold'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 우측 유틸리티 & 모바일 햄버거 토글 버튼 */}
          <div className="flex items-center gap-3">
            <Link
              href="/map"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm shadow-blue-600/30 hover:bg-blue-700 active:scale-95 transition-all"
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
              className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen ? (
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
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
        <div className="fixed inset-0 z-50 md:hidden">
          {/* 백드롭 딤 오버레이 */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* 슬라이드 드로어 패널 */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right duration-300">
            <div>
              {/* 드로어 헤더 */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg">
                    🏛️
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">영등포 전통시장</h3>
                    <p className="text-[10px] text-blue-600 font-semibold">공식 안내 서비스</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
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
                  const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3.5 rounded-2xl transition-all ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 border border-blue-100 font-bold'
                          : 'text-slate-800 hover:bg-slate-50 font-semibold'
                      }`}
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
            <div className="pt-6 border-t border-slate-100 space-y-3 text-xs text-slate-500">
              <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                <p className="font-bold text-slate-700 flex items-center gap-1.5">
                  <span>📞 고객지원센터 & 상인회</span>
                </p>
                <p className="text-blue-600 font-bold text-sm mt-1">02-2634-1388</p>
                <p className="text-[11px] text-slate-400 mt-0.5">운영시간: 09:00 ~ 21:00 연중무휴</p>
              </div>
              <p className="text-center text-[11px] text-slate-400">
                © 영등포 전통시장 공식 홈페이지
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
