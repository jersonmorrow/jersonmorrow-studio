import Social from "@/components/Social";
import Title from "@/components/Title";
import Avatar from "@/components/avatar";

export default function ReachOut() {
    return (
        <>
            <Avatar />
            <Social />
            <Title width="690px" title="‣ Reach out to me! 👨🏻‍💻" />

            <h2 className="text-white text-m leading-6 py-1">Feel free to contact me for any work or suggestions below</h2>
            <ul className="text-white mt-4 font-light">
                <li>👾 Jerson Morrow</li>
                <li>✉️ dev@jersonquintero.com</li>
                <li>📞 (+1) 701 713 5688</li>
                <li>🛸 Seattle WA</li>
            </ul>
        </>
    );
}
