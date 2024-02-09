import { avatar, name } from "@/components/info";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import Icon from "@/components/Icon";
import Title from "@/components/Title";
import { SanityClient } from "sanity";

const client = new SanityClient({
    projectId: "r0k6kppj",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-05-24",
});

async function fetchData() {
    const data = await client.fetch('*[_type == "author"]');
    return data;
}

export default async function Home() {
    const data = await fetchData();

    return (
        <>
            <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
                <Image alt={name} className="rounded-full" src={avatar} placeholder="blur" width={150} height={150} priority />
            </div>

            <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400 text-white">
                <Icon url="https://twitter.com/leeerob" name="github">
                    <GitHubIcon />
                </Icon>
                <Icon url="com" name="linkedIn">
                    <LinkedInIcon />
                </Icon>
            </div>

            <Title width="500px" title={name} />

            <h2 className="text-white text-m leading-6 py-1"></h2>
        </>
    );
}
