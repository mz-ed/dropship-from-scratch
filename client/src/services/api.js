const API_BASE = "http://localhost:5000/api";

export const fetchProducts = async () => {
  const res = await fetch(`${API_BASE}/products`);
  return res.json();
};
