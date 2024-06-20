import { getServerSession } from "next-auth";
import { getDictionary } from "../../dictionaries";
import { options } from "@/app/api/auth/[...nextauth]/options";

import dynamic from "next/dynamic";
import Loading from "@/app/loading";

const Mapeditor = dynamic(() => import("../editor"), {
  ssr: false,
});

async function getSvg(map: string) {
  const res = await fetch(`${process.env.MAPS_FOLDER}${map}`, { mode: "no-cors" });
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.text()
}

export default async function Page({ params: { lang, map } }) {
  const dict = await getDictionary(lang);
  const session = await getServerSession(options);
  const mapFile = await getSvg(map);

  if (mapFile === '') {
    return <Loading/>;
  }

  return (
    <>
      <h1>{dict.editor.landing}</h1>
      <Mapeditor map={mapFile} filename={map} terms={dict.editor} user={session?.user?.name} />
    </>
  );
}
