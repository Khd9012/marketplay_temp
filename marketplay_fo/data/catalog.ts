export type Product = {
  slug: string;
  title: string;
  category: string;
  price: string;
  rating: number;
  summary: string;
  accent: string;
  image: string;
  tags: string[];
};

export const categories = [
  "신상품",
  "베스트",
  "주방",
  "리빙",
  "패션",
  "테크",
  "뷰티",
];

export const featuredProducts: Product[] = [
  {
    slug: "atelier-speaker",
    title: "Atelier Wood Speaker",
    category: "테크",
    price: "189,000원",
    rating: 4.9,
    summary: "공간 분위기를 바꾸는 원목 블루투스 스피커",
    accent: "#efe2d2",
    image: "AS",
    tags: ["감성 오디오", "무료 배송"],
  },
  {
    slug: "linen-table-set",
    title: "Sunday Linen Table Set",
    category: "리빙",
    price: "74,000원",
    rating: 4.8,
    summary: "브런치 무드를 더하는 린넨 테이블 컬렉션",
    accent: "#dde7db",
    image: "LS",
    tags: ["친환경", "기프트 추천"],
  },
  {
    slug: "soft-runner",
    title: "Soft Runner Sneakers",
    category: "패션",
    price: "129,000원",
    rating: 4.7,
    summary: "가벼운 착화감과 미니멀 실루엣의 데일리 스니커즈",
    accent: "#f1dfd8",
    image: "SR",
    tags: ["한정 컬러", "사이즈 다양"],
  },
  {
    slug: "moss-lamp",
    title: "Moss Glow Lamp",
    category: "리빙",
    price: "96,000원",
    rating: 4.9,
    summary: "따뜻한 빛으로 완성하는 무드 조명",
    accent: "#e5ebd6",
    image: "ML",
    tags: ["인기 상품", "야간 무드"],
  },
];

export const curatedCollections = [
  {
    title: "Weekend Edit",
    description: "주말 공간을 채우는 따뜻한 리빙 셀렉션",
  },
  {
    title: "Desk Upgrade",
    description: "일하는 시간을 조금 더 즐겁게 만드는 아이템",
  },
  {
    title: "Seasonal Accent",
    description: "계절감이 느껴지는 포인트 아이템 모음",
  },
];

export const brandRows = [
  "Maison North",
  "Studio Oat",
  "Nook Supply",
  "Forme Daily",
  "Serein Objects",
];
