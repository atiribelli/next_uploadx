import { getServerSession } from 'next-auth';
import { getDictionary } from '../dictionaries';
import { redirect } from 'next/navigation';
import { options } from '@/app/api/auth/[...nextauth]/options';
//import Mapeditor from './editor';

import dynamic from 'next/dynamic'
 
const Mapeditor = dynamic(() => import('./editor'), {
  ssr: false,
})

export default async function Page({ params: { lang } }) {
    const dict = await getDictionary(lang);
    const session = await getServerSession(options);

    if (!session){
      redirect(`/api/auth/signin?callbackUrl=/${lang}/editor`);
    }
  
    return (
        <>
            <h1>{dict.editor.landing}</h1>
            <Mapeditor map={'filemappa'} terms={dict.editor} user={session?.user?.name}/>
        </>
    );
  }