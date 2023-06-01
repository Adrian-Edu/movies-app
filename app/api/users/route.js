export async function GET() {
  const users = [
    { id: 1, name: "Adrian" },
    { id: 2, name: "Bogdan" },
    { id: 3, name: "Alexandru" },
  ];

  return new Response(JSON.stringify(users));
}
