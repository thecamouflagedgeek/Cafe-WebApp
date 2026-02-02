import { prisma } from "@/lib/prisma"

export async function createItem(data:any)
{
    return prisma.menuItem.create({
        data
    })
}

export async function getItem(cid: string)
{
    return prisma.menuItem.findMany({
        where: {cid}
    })
}

export async function updateItem(id: string, data:any)
{
    return prisma.menuItem.update({
        where:{id},
        data
    })
}

export async function deleteItem(id:string)
{
    return prisma.menuItem.delete({
        where: {id},
    })
}