import {z} from "zod"

export cconst menuSchema=z.object(
    {
        name:z.string().min(2),
        price:z.number().positive(),
        category: z.string(),
        cid:z.string()
    }
)