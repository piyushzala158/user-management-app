import { API_URL } from "@/constants/appConstants";

interface ApiFunctionProps {
  endpoint: string; // API endpoint (e.g., "/users")
  method: "GET" | "POST" | "PUT"; // HTTP method
  body?: object; // Optional request body for POST/PUT
  headers?: Record<string, string>; // Optional headers
}

export async function api({
  endpoint,
  method,
  body,
  headers,
}: ApiFunctionProps): Promise<unknown> {
  const url = `${API_URL}${endpoint}`;

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (method === "POST" || method === "PUT") {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
}
