import { kv } from "@vercel/kv"


export default async function Home() {
  const res = await fetch("https://api.github.com/repos/adesewa293/view-counter", { next: {revalidate:5}});
  const data = await res.json();

  const pageViews = await kv.incr("views");
  const myStyles = {
    p:{
fontSize: pageViews + "rem",
    },
  };
  return (
    <main>
      <p style={myStyles.p}>{pageViews}</p><span>⭐️{data.stargazers_count}</span>
    </main>
  )
}
