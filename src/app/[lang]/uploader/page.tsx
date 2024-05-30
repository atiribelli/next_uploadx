import { getServerSession } from 'next-auth';
import { getDictionary } from '../dictionaries';
import { redirect } from 'next/navigation';
import { options } from '@/app/api/auth/[...nextauth]/options';
import Uploader from './uploader';

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const session = await getServerSession(options);

  if (!session){
    redirect(`/api/auth/signin?callbackUrl=/${lang}/uploader`);
  }

  return (
      <>
        <h1>{dict.uploader.landing}</h1>
        <Uploader rowsPerPage={25} terms={dict.uploader} user={session?.user?.name}/>
      </>
  );
}
