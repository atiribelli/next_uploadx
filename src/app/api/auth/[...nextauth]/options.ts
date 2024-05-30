import type { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import type { User } from '@/app/lib/definitions';
import { z } from "zod";
import bcrypt from 'bcrypt';
import { pool } from '@/app/api/conn';

let localPool: { getConnection: () => any; };

if (!global.pool){
  global.pool = pool;
}

localPool = global.pool;
 
async function getUser(username: string): Promise<User | null> {
    const conn = await localPool.getConnection();

    try {
        const query = `SELECT *, id_text as id FROM account_coa WHERE email=? OR name=?`;
        const user : User = await conn.query(query, [username, username]);
        return user;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }finally{
        conn.release();
        conn.end();
    }
}

export const options: NextAuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        Credentials({
            id: "account_coa",
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "enter your username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "usa la solita..."
                }
            },
            async authorize(credentials, req) {
                console.log("account_coa");
                const parsedCredentials = z
                    .object({ username: z.string(), password: z.string().min(5) })
                    .safeParse(credentials);
       
                if (parsedCredentials.success) {
                    const { username, password } = parsedCredentials.data;
                    const user: User | null = await getUser(username);
                    const passwordsMatch = await bcrypt.compare(password, user?.password || '');
                    if (passwordsMatch) return user;
                  }
           
                  console.log('Invalid credentials');
                  return null;
            },
        }),
        Credentials({
            id: "COMX Authentication",
            name: "Credentials - COMX",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "enter your username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "non usare la solita..."
                }
            },
            async authorize(credentials, req) {
                console.log("Comx");
                //inserire il codice per recuperare l'utente
                const user = {id: '1', name: "citel", password: "Supra2022!"};

                return credentials?.username === user.name && credentials?.password === user.password ? user : null;
            },
        })
    ],
    theme:{
        logo: "/logologin.png"
    }
}