type KakaoMapEmbedProps = {
  className?: string;
  minHeight?: string;
};

export const KakaoMapEmbed = ({
  className = '',
  minHeight = 'min-h-[360px] sm:min-h-[460px]',
}: KakaoMapEmbedProps) => {
  const kakaoMapUrl
    = 'https://map.kakao.com/?urlX=479685&urlY=1116777&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false';
  const kakaoStaticMapImg
    = 'https://staticmap.kakao.com/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=479685&MY=1116778&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo';

  return (
    <div
      className={`
        flex w-full flex-col justify-between overflow-hidden rounded-3xl border
        border-slate-200 bg-white shadow-lg shadow-slate-200/50
        ${className}
      `}
    >
      {/* 1. 카카오 정적 지도 이미지 HTML 링크 영역 (퍼가기 태그 구조) */}
      <a
        href={kakaoMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          relative block w-full
          ${minHeight}
          group flex-1 cursor-pointer overflow-hidden bg-slate-100
        `}
        title="카카오맵에서 영등포 전통시장 위치 확인하기"
      >
        <img
          src={kakaoStaticMapImg}
          alt="영등포 전통시장 카카오맵"
          className="
            size-full object-cover object-center transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* 호버 시 카카오맵 안내 오버레이 */}
        <div className="
          absolute inset-0 flex items-center justify-center bg-slate-900/20
          opacity-0 backdrop-blur-[2px] transition-opacity duration-300
          group-hover:opacity-100
        "
        >
          <span className="
            flex items-center gap-2 rounded-2xl bg-white/95 px-5 py-2.5 text-xs
            font-black text-slate-900 shadow-xl
            sm:text-sm
          "
          >
            <span>🗺️ 카카오맵에서 길찾기 & 크게보기</span>
            <svg
              className="size-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </span>
        </div>

        {/* 좌측 상단 위치 안내 뱃지 */}
        <div className="
          absolute top-4 left-4 z-10 flex items-center gap-2 rounded-2xl border
          border-slate-200/80 bg-white/90 px-3.5 py-1.5 text-xs font-bold
          text-slate-800 shadow-md backdrop-blur-md
        "
        >
          <span className="relative flex size-2.5">
            <span className="
              absolute inline-flex size-full animate-ping rounded-full
              bg-rose-400 opacity-75
            "
            >
            </span>
            <span className="
              relative inline-flex size-2.5 rounded-full bg-rose-600
            "
            >
            </span>
          </span>
          <span>영등포 전통시장</span>
        </div>
      </a>

      {/* 2. 카카오맵 HTML 퍼가기 공식 하단 바 */}
      <div className="
        flex items-center justify-between border-t border-slate-200/80
        bg-[#f9f9f9] px-4 py-3 text-xs
        sm:px-5
      "
      >
        <div className="flex items-center gap-2.5">
          <img
            src="//t1.kakaocdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
            width={72}
            height={16}
            alt="카카오맵"
            className="h-4 w-auto"
          />
          <span className="
            hidden text-slate-300
            sm:inline
          "
          >
            |
          </span>
          <span className="
            hidden text-[11px] font-medium text-slate-600
            sm:inline sm:text-xs
          "
          >
            서울특별시 영등포구 영등포로 225
          </span>
        </div>

        <div>
          <a
            href={kakaoMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-1.5 rounded-lg border
              border-slate-200 bg-white px-3 py-1.5 text-xs font-bold
              text-slate-800 shadow-2xs transition-colors
              hover:border-blue-300 hover:text-blue-600
            "
          >
            <span>지도 크게 보기</span>
            <svg
              className="size-3 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
