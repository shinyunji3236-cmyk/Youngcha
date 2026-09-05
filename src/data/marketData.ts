export interface StoryItem {
  id: string;
  slug: string;
  title: string;
  subTitle: string;
  category: string;
  badgeColor: string;
  summary: string;
  content: string[];
  image: string;
  gallery: string[];
  readTime: string;
  author: string;
  storeName: string;
  location: string;
  phone: string;
  hours: string;
  signatureMenu: string[];
  tags: string[];
  views: number;
  likes: number;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  subTitle: string;
  status: '진행중' | '예정' | '상시';
  category: string;
  dateRange: string;
  startDate: string;
  endDate: string;
  time: string;
  location: string;
  host: string;
  fee: string;
  summary: string;
  content: string[];
  image: string;
  gallery: string[];
  tags: string[];
  notice: string[];
  views: number;
  likes: number;
}

export interface StoreCategory {
  id: string;
  slug: string;
  name: string;
  icon: string;
  countText: string;
  category: string;
  description: string;
  popularItems: string[];
  hours: string;
  badge: string;
  badgeColor: string;
  image: string;
  stores: {
    name: string;
    location: string;
    phone: string;
    menu: string;
    hours: string;
    desc: string;
    image: string;
  }[];
}

export interface TourCourse {
  id: string;
  title: string;
  courseNumber: string;
  duration: string;
  tag: string;
  badgeColor: string;
  summary: string;
  spots: string[];
  description: string;
  image: string;
}

export const STORIES_DATA: StoryItem[] = [
  {
    id: '1',
    slug: 'grandma-ricecake',
    title: '매일 아침 직접 뽑는 가마솥 할머니 떡집',
    subTitle: '30년 동안 매일 새벽 4시, 정직한 쌀로 빚어내는 구수한 전통의 맛',
    category: '30년 전통 · 맛집',
    badgeColor: 'bg-amber-500 text-white',
    summary: '새벽 4시부터 고소한 떡 냄새로 시장을 깨우는 할머니의 정성 어린 수제 떡 이야기. 100% 국내산 찹쌀과 천연 재료만을 고집하며 30년간 변함없는 맛을 지켜오고 있습니다.',
    content: [
      '영등포 전통시장의 동문 골목으로 들어서면 새벽 어스름 속에서부터 뽀얀 김과 함께 고소한 참기름 냄새가 퍼집니다. 바로 30년 넘게 이 자리를 지켜온 \'가마솥 할머니 떡집\'입니다.',
      '할머니께서는 매일 새벽 4시에 나와 가마솥에 불을 지피고, 전날 정성스레 불려둔 국내산 찹쌀을 시루에 안칩니다. 인공 감미료를 일절 쓰지 않고 천연 쑥과 단호박, 모시잎만으로 고운 색과 맛을 냅니다.',
      '특히 손으로 직접 빚는 찹쌀떡과 시루떡은 부드럽고 쫄깃한 식감 덕분에 멀리서도 찾아오는 단골손님들로 이른 아침부터 문전성시를 이룹니다.',
      '"사람 입에 들어가는 건데 거짓말하면 안 되지. 내 가족이 먹는다는 마음으로 30년 동안 정성 하나로 떡을 쪄왔어." 할머니의 따뜻한 미소 속에 전통시장의 넉넉한 정이 묻어납니다.',
    ],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1000&q=80',
    ],
    readTime: '3분 소요',
    author: '영등포 시장 스토리 취재팀',
    storeName: '가마솥 할머니 떡집 (1동 12호)',
    location: '서울특별시 영등포구 영등포로 225 전통시장 동문 12호',
    phone: '02-2634-1122',
    hours: '매일 06:00 ~ 20:00 (명절 당일 휴무)',
    signatureMenu: ['수제 가마솥 찹쌀떡 (1팩 5,000원)', '전통 모시송편 (1팩 4,000원)', '단호박 영양 찰떡 (1팩 6,000원)', '갓 쪄낸 시루떡 (1팩 4,500원)'],
    tags: ['#30년전통', '#수제떡집', '#영등포맛집', '#전통시장먹거리', '#착한가게', '#부모님선물'],
    views: 3840,
    likes: 245,
  },
  {
    id: '2',
    slug: 'retro-cafe',
    title: '옛 방앗간의 변신, 감성 레트로 카페',
    subTitle: '아버지의 기름 짜던 방앗간을 젊은 감각의 곡물 로스팅 카페로 재해석하다',
    category: '청년상인 · 카페',
    badgeColor: 'bg-blue-600 text-white',
    summary: '아버지의 기름집을 개조해 전통 곡물 로스팅 음료를 선보이는 젊은 상인의 도전. 세련된 인테리어 속에 옛 방앗간의 정취와 고소한 미숫가루 음료를 함께 담아냈습니다.',
    content: [
      '시장 골목 한켠, 낡은 기름틀과 앤티크한 목재 간판이 눈길을 사로잡는 곳. 2대째 가업을 이어받은 30대 청년 대표가 운영하는 \'옛 방앗간 카페\'입니다.',
      '과거 40년간 참기름과 들기름을 짜던 방앗간의 기물들을 감각적인 인테리어 소품으로 재탄생시키고, 전통 7곡 미숫가루와 검은깨를 활용한 시그니처 곡물 라떼를 선보여 젊은 세대와 어르신 모두의 발길을 사로잡고 있습니다.',
      '"전통시장은 결코 낡은 곳이 아닙니다. 옛것의 깊은 멋에 현대적인 감각을 더하면 누구나 찾고 싶은 특별한 쉼터가 될 수 있다고 믿었습니다."',
      '진한 곡물 향과 감미로운 음악이 흐르는 이곳에서 시장 장보기 후 여유로운 휴식을 즐겨보세요.',
    ],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80',
    ],
    readTime: '4분 소요',
    author: '청년상인 매거진',
    storeName: '옛 방앗간 카페 (청년몰 2층)',
    location: '서울특별시 영등포구 영등포로 225 전통시장 중앙통 2층 201호',
    phone: '02-2634-5544',
    hours: '매일 10:00 ~ 22:00 (월요일 휴무)',
    signatureMenu: ['방앗간 곡물 크림 라떼 (5,500원)', '할머니 미숫가루 프라페 (5,000원)', '검은깨 바스크 치즈케이크 (6,500원)', '전통 식혜 아인슈페너 (5,500원)'],
    tags: ['#청년상인', '#레트로카페', '#곡물라떼', '#영등포핫플', '#시장데이트', '#감성카페'],
    views: 4210,
    likes: 312,
  },
  {
    id: '3',
    slug: 'fresh-butcher',
    title: '신선함으로 승부하는 2대째 축산 상점',
    subTitle: '최상급 암퇘지와 1++ 한우만을 엄선하여 정직한 무게로 공급하는 고집스런 철학',
    category: '신선정육 · 상점',
    badgeColor: 'bg-rose-600 text-white',
    summary: '좋은 고기만 고집하는 고집스러운 사장님의 정직한 상인 철학. 매일 새벽 산지에서 직송되는 최상급 한우와 암퇘지로 단골들의 두터운 신뢰를 받고 있습니다.',
    content: [
      '30년 동안 변함없이 영등포 전통시장에서 최상의 육질을 지켜온 \'신선 축산 유통\'. 매일 새벽 마장동과 충북 음성 공판장에서 직접 눈으로 보고 경매받은 1++ 한우와 무항생제 암퇘지만을 판매합니다.',
      '고객이 원하는 두께와 용도에 맞추어 현장에서 정교하게 손질해 드리며, 고기의 숙성 온도와 신선도를 유지하기 위해 첨단 저온 저장고를 갖추고 있습니다.',
      '"고기는 속이지 않습니다. 손님이 드셔보시면 고기의 신선함과 육즙을 바로 아시죠. 정직한 가격과 최고의 품질이 저희 상점의 30년 자부심입니다."',
      '명절 선물세트부터 일상적인 국거리, 캠핑용 삼겹살까지 최상의 고기를 합리적인 전통시장 가격으로 만나보세요.',
    ],
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=1000&q=80',
    ],
    readTime: '3분 소요',
    author: '전통시장 현장 탐방',
    storeName: '신선 축산 유통 (정육코너 5호)',
    location: '서울특별시 영등포구 영등포로 225 전통시장 북문 정육코너 5호',
    phone: '02-2634-8899',
    hours: '매일 07:00 ~ 21:00 (연중무휴)',
    signatureMenu: ['1++ 등급 명품 한우 등심 (100g 12,000원~)', '국내산 무항생제 생삼겹살 (600g 14,000원)', '수제 양념 LA갈비 세트', '한우 사골 우족 곰거리'],
    tags: ['#신선정육', '#1등급한우', '#무항생제삼겹살', '#영등포정육점', '#온누리상품권환급', '#캠핑고기'],
    views: 2950,
    likes: 188,
  },
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: '1',
    slug: 'night-market',
    title: '금요 달빛 야시장 & 버스킹 공연',
    subTitle: '매주 금요일 밤 펼쳐지는 길거리 푸드트럭과 신나는 라이브 음악의 향연',
    status: '진행중',
    category: '야시장 · 문화공연',
    dateRange: '2026. 04. 01. ~ 2026. 10. 31.',
    startDate: '2026. 04. 01.',
    endDate: '2026. 10. 31.',
    time: '매주 금요일 18:00 ~ 22:00',
    location: '영등포 전통시장 중앙 광장 특별무대',
    host: '영등포 전통시장 상인회 및 문화관광형시장 육성사업단',
    fee: '무료 관람 (먹거리 개별 구매)',
    summary: '매주 금요일 밤! 다양한 길거리 푸드트럭과 청년 버스킹 뮤지션들의 신나는 라이브 공연이 펼쳐집니다. 가족, 연인과 함께 정겨운 밤 산책과 맛있는 야식을 즐겨보세요!',
    content: [
      '영등포 전통시장이 매주 금요일 밤마다 화려한 불빛과 맛있는 냄새, 감미로운 음악이 가득한 \'달빛 야시장\'으로 변신합니다.',
      '중앙 광장에 마련된 특별무대에서는 실력파 인디 밴드와 어쿠스틱 버스커들의 라이브 공연이 18시부터 22시까지 이어지며, 광장 주변에는 야시장 전용 푸드트럭과 상인들의 인기 야식 부스가 운영됩니다.',
      '대표 먹거리로는 불맛 가득한 큐브 스테이크, 매콤달콤 닭강정, 불꽃 핫바, 수제 꽈배기, 전통 빈대떡과 시원한 수제 생맥주 등이 준비되어 있습니다.',
      '야외 테이블 쉼터가 넉넉히 마련되어 있어 가족, 연인, 친구와 함께 낭만적인 불금을 보내기에 제격입니다. 아케이드 지붕이 완비되어 우천 시에도 정상 진행됩니다.',
    ],
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    ],
    tags: ['#야시장', '#달빛버스킹', '#금요야시장', '#영등포축제', '#길거리음식', '#불금데이트', '#라이브공연'],
    notice: [
      '야외 테이블은 선착순으로 자유롭게 이용 가능합니다.',
      '환경 보호를 위해 다회용 식기 반납 부스가 운영됩니다.',
      '공영주차장 이용 시 야시장 구매 영수증 제시로 주차 할인이 적용됩니다.',
      '우천 시에도 현대식 아케이드 지붕 아래에서 정상 진행됩니다.',
    ],
    views: 6520,
    likes: 489,
  },
  {
    id: '2',
    slug: 'onnuri-event',
    title: '온누리상품권 즉시 환급 이벤트',
    subTitle: '전통시장에서 5만 원 이상 구매 시 온누리상품권 1만 원권을 현장 즉시 환급!',
    status: '진행중',
    category: '쇼핑혜택 · 환급행사',
    dateRange: '2026. 09. 01. ~ 예산 소진 시까지',
    startDate: '2026. 09. 01.',
    endDate: '2026. 10. 31.',
    time: '매일 10:00 ~ 18:00 (환급 부스 운영)',
    location: '영등포 전통시장 고객지원센터 1층 접수처',
    host: '소상공인시장진흥공단 & 영등포 전통시장 상인회',
    fee: '무료 (구매 영수증 소지자 대상)',
    summary: '전통시장에서 5만 원 이상 구매 시 온누리상품권 1만 원권을 현장에서 즉시 환급해 드립니다. 알뜰하고 즐거운 전통시장 장보기를 경험하세요.',
    content: [
      '전통시장 활성화 및 서민 가계 부담 완화를 위한 \'온누리상품권 특별 환급 행사\'가 영등포 전통시장에서 열립니다.',
      '행사 기간 중 시장 내 참여 점포에서 신용카드, 체크카드, 제로페이, 현금영수증으로 5만 원 이상 결제하신 영수증을 고객지원센터 1층 접수처로 가져오시면 온누리상품권 1만 원권을 즉시 증정합니다.',
      '1인당 최대 2만 원(10만 원 이상 구매 시)까지 환급 가능하며, 여러 점포에서 구매한 당일 영수증을 합산하여 신청하실 수 있습니다.',
      '환급받으신 온누리상품권은 당일 영등포 전통시장의 모든 상점에서 바로 사용하실 수 있어 더욱 알뜰한 장보기가 가능합니다.',
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c6?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0a67e55722c6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1000&q=80',
    ],
    tags: ['#온누리상품권', '#환급이벤트', '#알뜰장보기', '#시장혜택', '#가성비쇼핑', '#소상공인응원'],
    notice: [
      '당일 영수증에 한하여 합산 신청이 가능합니다.',
      '신분증 또는 본인 명의 휴대폰을 지참해 주셔야 합니다.',
      '선착순 예산 소진 시 조기 마감될 수 있습니다.',
      '법인카드 및 간이영수증은 환급 대상에서 제외됩니다.',
    ],
    views: 5180,
    likes: 372,
  },
];

export const STORE_CATEGORIES: StoreCategory[] = [
  {
    id: 'ricecake',
    slug: 'ricecake',
    name: '떡 / 제과',
    icon: '🍞',
    countText: '가마솥 할머니 떡집 외 12곳',
    category: '전통간식 & 제과',
    description: '매일 아침 갓 쪄낸 쫄깃한 수제 떡과 고소한 옛날 꽈배기, 전통 과자를 판매하는 상점들입니다.',
    popularItems: ['수제 찹쌀떡', '모시송편', '시루떡', '옛날 찹쌀 꽈배기', '수제 팥빵'],
    hours: '06:00 ~ 20:00',
    badge: '대표 먹거리',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    stores: [
      {
        name: '가마솥 할머니 떡집',
        location: '동문 12호',
        phone: '02-2634-1122',
        menu: '가마솥 수제 찹쌀떡, 모시송편',
        hours: '06:00 ~ 20:00',
        desc: '30년 전통 100% 국내산 찹쌀 수제 떡 전문점',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: '영등포 명물 수제 꽈배기',
        location: '중앙통 8호',
        phone: '02-2634-3341',
        menu: '찹쌀 꽈배기, 팥도넛, 핫도그',
        hours: '09:00 ~ 21:00',
        desc: '식어도 쫄깃한 숙성 반죽의 명품 꽈배기',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: '한양 전통 한과/강정',
        location: '서문 3호',
        phone: '02-2634-7711',
        menu: '수제 오란다, 유과, 조청 강정',
        hours: '08:30 ~ 20:00',
        desc: '명절 선물 및 바삭한 수제 전통 강정 전문',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 'meat',
    slug: 'meat',
    name: '정육 / 수산',
    icon: '🥩',
    countText: '신선 축산 유통 외 8곳',
    category: '신선 축산 & 수산물',
    description: '매일 새벽 산지에서 직송되는 최상급 한우, 무항생제 암퇘지, 싱싱한 제철 수산물을 취급합니다.',
    popularItems: ['1++ 한우 등심', '국내산 생삼겹살', '제철 활어회', '건어물 세트', '산낙지/꽃게'],
    hours: '07:00 ~ 21:00',
    badge: '산지 직송',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80',
    stores: [
      {
        name: '신선 축산 유통',
        location: '북문 정육코너 5호',
        phone: '02-2634-8899',
        menu: '1++ 한우 등심, 암퇘지 생삼겹살',
        hours: '07:00 ~ 21:00',
        desc: '2대째 이어오는 정직한 한우·한돈 축산물 전문점',
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: '동해 싱싱 수산',
        location: '수산골목 2호',
        phone: '02-2634-9922',
        menu: '광어/우럭 모둠회, 산낙지, 꽃게',
        hours: '07:30 ~ 21:30',
        desc: '당일 직송 활어와 해산물을 현장 손질해 드립니다',
        image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 'fruits',
    slug: 'fruits',
    name: '청과 / 야채',
    icon: '🍎',
    countText: '수원 상회 외 15곳',
    category: '제철 과일 & 친환경 채소',
    description: '전국 산지에서 올라온 당도 높은 제철 과일과 당일 새벽 수확한 신선한 채소를 저렴하게 판매합니다.',
    popularItems: ['꿀사과/배', '샤인머스캣/포도', '제철 쌈채소', '유기농 나물', '햇고구마/감자'],
    hours: '06:30 ~ 21:00',
    badge: '당일 수확',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
    stores: [
      {
        name: '수원 상회 청과',
        location: '중앙통 1호',
        phone: '02-2634-4422',
        menu: '고당도 사과, 나주배, 제철 과일 박스',
        hours: '06:30 ~ 21:00',
        desc: '30년 노하우로 엄선한 당도 보장 제철 과일 전문',
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: '싱싱 야채 백화점',
        location: '남문 채소코너 4호',
        phone: '02-2634-6633',
        menu: '친환경 쌈채소, 버섯, 양파, 마늘',
        hours: '06:00 ~ 20:30',
        desc: '새벽 가락시장 직송 신선 채소 도소매',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    id: 'dining',
    slug: 'dining',
    name: '식당 / 카페',
    icon: '☕',
    countText: '옛 방앗간 카페 외 10곳',
    category: '전통 식당 & 쉼터 카페',
    description: '진한 국물의 명물 순대국밥과 전통 팥죽, 정겨운 분위기의 감성 카페까지 맛과 휴식이 공존합니다.',
    popularItems: ['영등포 명물 순대국', '전통 팥죽/호박죽', '방앗간 곡물라떼', '시장 수제 잔치국수'],
    hours: '09:00 ~ 22:00',
    badge: '핫플레이스',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    stores: [
      {
        name: '옛 방앗간 카페',
        location: '중앙통 2층 201호',
        phone: '02-2634-5544',
        menu: '곡물 크림 라떼, 미숫가루 프라페',
        hours: '10:00 ~ 22:00',
        desc: '옛 방앗간의 정취를 살린 레트로 감성 쉼터',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: '원조 영등포 순대국',
        location: '순대골목 1호',
        phone: '02-2634-7788',
        menu: '토종 순대국밥, 머릿고기 수육, 모둠순대',
        hours: '08:00 ~ 22:30',
        desc: '24시간 푹 고아낸 진하고 구수한 국물의 순대국밥',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
];

export const TOUR_COURSES: TourCourse[] = [
  {
    id: 'course-1',
    courseNumber: '01',
    title: '입이 즐거운 먹거리 탐방 코스',
    duration: '1시간 30분',
    tag: '미식 힐링',
    badgeColor: 'bg-blue-600 text-white',
    summary: '순대골목부터 수제만두, 꽈배기, 전통 떡까지 영등포 시장 대표 미식을 정복하는 코스',
    spots: ['영등포 명물 순대골목', '수제 만두 공방', '가마솥 할머니 떡집', '시장 핫바 & 꽈배기', '옛 방앗간 카페'],
    description: '입안 가득 퍼지는 고소한 향과 정겨운 손맛! 30년 전통의 노포와 젊은 청년 상인의 트렌디한 간식을 함께 즐기는 미식 순례 코스입니다.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'course-2',
    courseNumber: '02',
    title: '알뜰장보기 & 볼거리 코스',
    duration: '2시간',
    tag: '실속 장보기',
    badgeColor: 'bg-amber-600 text-white',
    summary: '신선한 제철 과일과 정육, 건어물, 정겨운 의류 잡화를 알뜰하게 둘러보는 장보기 코스',
    spots: ['신선 청과 코너', '신선 축산 유통', '수산 건어물 상가', '전통 의류 도소매 거리', '고객지원센터 환급소'],
    description: '싱싱한 산지 직송 농수산물과 가성비 좋은 생활 잡화를 합리적인 가격에 장보고, 온누리상품권 환급 혜택까지 챙기는 알뜰 실속 코스입니다.',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
  },
];
