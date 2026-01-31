import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaAdapter} from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

const handler=NextAuth({
    adapter: PrismaAdapter(prisma),
    session:{
        strategy:"jwt"
    }, 
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                email:{},
                password:{}
            },
            async authorize(credentials)
            {
                const user=await prisma.user.findUnqiue({
                    where:{email:credentials?.email}
                })
                if(!user || !user.password)
                {
                    return null
                }
                const valid =await bcrypt.compare( credentials!.password,user.password)
                if(!valid)
                {
                    return null
                }
                return user 
            }    
        })
    ],
    callbacks:{
        async jwt({token,user})
        {
            if(user)
            {
                token.id=user.id
                token.role=user.role
            }
            return token
        },
        async session({session,token})
        {
            session.user.id =token.id as string
            session.user.role=token.role as string
            return session
        }
    }
})
export {handler as GET,handler as POST}
