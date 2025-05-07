import { Handlers } from "$fresh/server.ts";

const CategoryData = [
    {
        name:"category1",
        status:1,
        date:Date.now(),
    },
    {
        name:"category2",
        status:1,
        date:Date.now(),
    },
    {
        name:"category3",
        status:1,
        date:Date.now(),
    },
    {
        name:"category4",
        status:1,
        date:Date.now(),
    },
    {
        name:"category5",
        status:1,
        date:Date.now(),
    },
    {
        name:"category6",
        status:1,
        date:Date.now(),
    },
    {
        name:"category7",
        status:1,
        date:Date.now(),
    },
]

export const handler: Handlers = {
    async GET(_req,ctx:any) {
        try {
            const categories = CategoryData;
            return await ctx.render(categories);
        } catch (error) {
            console.error(error);
        }
    },
};

export default function blog() {
    return (
       <div>
        this is blog page!
       </div>
    );
}

