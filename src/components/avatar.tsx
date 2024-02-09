import Image from "next/image";
import { avatar, name } from "@/components/info";

export default function Avatar() {
    return (
        <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
            <Image alt={name} className="rounded-full" src={avatar} placeholder="blur" width={150} height={150} priority />
        </div>
    );
}
