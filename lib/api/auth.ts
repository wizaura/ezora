export async function login(data: {
  email: string;
  password: string;
}) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  
  const json = await res.json();
  console.log(json, 'jsom')

  if (!res.ok) {
    throw new Error(json.message);
  }

  return json;
}