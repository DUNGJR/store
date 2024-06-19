import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default getColors;

// import { Color } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const getCategories = async (): Promise<Color[]> => {
//   try {
//     const res = await fetch(URL, {
//       cache: 'no-cache', // Đảm bảo không sử dụng cache
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
//     }

//     return res.json();
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     throw error; // Rethrow lỗi để cho phép các phần gọi getCategories xử lý lỗi
//   }
// };

// export default getCategories;
