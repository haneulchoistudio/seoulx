import type { Product } from "~/types";

export const MockProducts: Product[] = [
  {
    _id: 1,
    data: {
      name: "배추김치",
      short: "달콤함과 짠 맛의 완벽 조합, 오늘도 맛있게 식사 해결해주는 김치",
      basePrice: 9.99,
      sizes: [6, 12, 20],
      availability: {
        6: 10,
        12: 5,
        20: 15,
      },
      images: [],
    },
  },
  {
    _id: 2,
    data: {
      name: "매운 깍두기",
      short: "매콤함 가득 채워주는 싱싱한 무 깍두기",
      basePrice: 6.99,
      sizes: [6, 12, 20],
      availability: {
        6: 7,
        12: 15,
        20: 25,
      },
      images: [],
    },
  },
];
