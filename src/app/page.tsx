
export default async function Home() {
  const res = await fetch("https://api.github.com/repos/adesewa293/view-counter", { next: {revalidate:5}});
  const data = await res.json();
  return (
    <main>
      {data.stargazers_count}
    </main>
  )
}
