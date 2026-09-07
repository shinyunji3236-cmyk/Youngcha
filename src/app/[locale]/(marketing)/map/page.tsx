'use client';

import { Footer } from '@/templates/Footer';
import { KakaoMapEmbed } from '@/templates/KakaoMapEmbed';
import { Navbar } from '@/templates/Navbar';

export default function MapPage() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-slate-50">
      {/* 1. 글로벌 네비게이션 */}
      <Navbar />

      <main className="
        py-12
        sm:py-16
      "
      >
        <div className="
          mx-auto max-w-7xl space-y-10 px-4
          sm:space-y-12 sm:px-6
          lg:px-8
        "
        >
          {/* 상단 헤더 영역 */}
          <div>
            <div className="flex items-center gap-2">
              <span className="
                inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5
                text-xs font-bold text-blue-800
              "
              >
                🗺️ MARKET MAP
              </span>
              <span className="
                text-xs font-bold tracking-wider text-slate-500 uppercase
              "
              >
                Directions & Map
              </span>
            </div>
            <h1 className="
              mt-2 text-2xl font-extrabold tracking-tight text-slate-900
              sm:text-4xl
            "
            >
              📍 영등포 전통시장 오시는 길 & 추천 코스 지도
            </h1>
            <p className="
              mt-2 max-w-2xl text-sm text-slate-600
              sm:text-base
            "
            >
              영등포 전통시장으로 오시는 길과 실시간 위치, 테마별 알찬 골목 탐방 코스를 확인하세요.
            </p>
          </div>

          {/* 메인 지도 및 추천 코스 그리드 */}
          <div className="
            grid grid-cols-1 items-stretch gap-8
            lg:grid-cols-3
          "
          >
            {/* 지도 컨테이너 (카카오맵 HTML 퍼가기 태그 연동) */}
            <div className="lg:col-span-2">
              <KakaoMapEmbed minHeight="min-h-[420px] sm:min-h-[520px]" />
            </div>

            {/* 추천 코스 카드 영역 */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="
                flex flex-col justify-between rounded-3xl border
                border-slate-200 bg-white p-6 shadow-md shadow-slate-200/50
                transition-all duration-300
                hover:border-blue-300 hover:shadow-xl
              "
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="
                      inline-flex items-center rounded-full bg-blue-100 px-3
                      py-1 text-xs font-black text-blue-700
                    "
                    >
                      COURSE 01
                    </span>
                    <span className="text-xs font-bold text-blue-600">⏱️ 예상 1시간 30분</span>
                  </div>
                  <h3 className="mt-3 text-lg font-black text-slate-900">
                    입이 즐거운 먹거리 탐방 코스
                  </h3>
                  <div className="
                    mt-3 rounded-2xl border border-blue-100/80 bg-blue-50/50 p-3
                  "
                  >
                    <p className="text-xs/relaxed font-medium text-slate-700">
                      영등포 명물 순대골목
                      {' '}
                      <span className="font-bold text-blue-600">➔</span>
                      {' '}
                      수제 만두
                      {' '}
                      <span className="font-bold text-blue-600">➔</span>
                      {' '}
                      전통 꽈배기
                      {' '}
                      <span className="font-bold text-blue-600">➔</span>
                      {' '}
                      시장 핫바
                    </p>
                  </div>
                  <p className="mt-3 text-xs/relaxed text-slate-500">
                    입안 가득 퍼지는 고소한 향과 정겨운 손맛! 영등포 시장 필수 먹거리 순례 코스입니다.
                  </p>
                </div>
                <div className="
                  mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-3
                  text-xs font-bold text-blue-600
                "
                >
                  <span>추천 대상: 먹거리 여행객 & 커플</span>
                </div>
              </div>

              <div className="
                flex flex-col justify-between rounded-3xl border
                border-slate-200 bg-white p-6 shadow-md shadow-slate-200/50
                transition-all duration-300
                hover:border-amber-300 hover:shadow-xl
              "
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="
                      inline-flex items-center rounded-full bg-amber-100 px-3
                      py-1 text-xs font-black text-amber-800
                    "
                    >
                      COURSE 02
                    </span>
                    <span className="text-xs font-bold text-amber-600">⏱️ 예상 2시간</span>
                  </div>
                  <h3 className="mt-3 text-lg font-black text-slate-900">
                    알뜰장보기 & 볼거리 코스
                  </h3>
                  <div className="
                    mt-3 rounded-2xl border border-amber-100/80 bg-amber-50/50
                    p-3
                  "
                  >
                    <p className="text-xs/relaxed font-medium text-slate-700">
                      신선 청과 코너
                      {' '}
                      <span className="font-bold text-amber-600">➔</span>
                      {' '}
                      건어물 상가
                      {' '}
                      <span className="font-bold text-amber-600">➔</span>
                      {' '}
                      전통 의류 도소매 거리
                    </p>
                  </div>
                  <p className="mt-3 text-xs/relaxed text-slate-500">
                    싱싱한 산지 직송 농수산물과 가성비 좋은 생활 잡화를 알뜰하게 둘러보는 장보기 코스입니다.
                  </p>
                </div>
                <div className="
                  mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-3
                  text-xs font-bold text-amber-600
                "
                >
                  <span>추천 대상: 가족 나들이 & 실속 장보기</span>
                </div>
              </div>
            </div>
          </div>

          {/* 하단: 교통편 및 주차 정보 안내 카드 */}
          <div className="
            rounded-3xl border border-slate-200 bg-white p-6 shadow-sm
            sm:p-8
          "
          >
            <h3 className="
              mb-6 flex items-center gap-2 text-lg font-black text-slate-900
            "
            >
              <span>🚗</span>
              {' '}
              대중교통 및 주차 이용 안내
            </h3>
            <div className="
              grid grid-cols-1 gap-6 text-sm
              md:grid-cols-3
            "
            >
              <div className="
                rounded-2xl border border-slate-100 bg-slate-50 p-4
              "
              >
                <span className="
                  mb-2 inline-block rounded-md bg-blue-600 px-2 py-0.5
                  text-[11px] font-bold text-white
                "
                >
                  지하철
                </span>
                <h4 className="font-bold text-slate-900">1호선 영등포역</h4>
                <p className="mt-1 text-xs text-slate-500">3번 또는 5번 출구로 나와 도보 약 300m (5분 소요)</p>
              </div>
              <div className="
                rounded-2xl border border-slate-100 bg-slate-50 p-4
              "
              >
                <span className="
                  mb-2 inline-block rounded-md bg-emerald-600 px-2 py-0.5
                  text-[11px] font-bold text-white
                "
                >
                  시내버스
                </span>
                <h4 className="font-bold text-slate-900">영등포시장 정류장</h4>
                <p className="mt-1 text-xs text-slate-500">간선 605, 661, 760 / 지선 5714, 6512 등 하차 후 바로 앞</p>
              </div>
              <div className="
                rounded-2xl border border-slate-100 bg-slate-50 p-4
              "
              >
                <span className="
                  mb-2 inline-block rounded-md bg-amber-600 px-2 py-0.5
                  text-[11px] font-bold text-white
                "
                >
                  공영주차장
                </span>
                <h4 className="font-bold text-slate-900">영등포 전통시장 공영주차장</h4>
                <p className="mt-1 text-xs text-slate-500">시장 구매 영수증 제시 시 주차 할인 혜택 제공</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. 글로벌 푸터 */}
      <Footer />
    </div>
  );
}
