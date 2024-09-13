const url = "http://localhost:3000";

export const getProducts = async () => {
  try {
    const res = await fetch(`${url}/discount_products`);
    const data = await res.json();

    return data;
  } catch (error) {
    return error.message;
  }
};