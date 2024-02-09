import Avatar from "@/components/avatar";
import Social from "@/components/Social";
import Title from "@/components/Title";

interface Achievement {
    id: number;
    bullet: string;
}

interface Job {
    company: string;
    role: string;
    yearOfStart: string;
    yearOfLeaving: string;
    achievements: Array<Achievement>;
    children?: React.ReactNode;
}

interface BulletList {
    bullets: Array<Achievement>;
}

function Job({ company, role, yearOfStart, yearOfLeaving, achievements, children }: Job) {
    return (
        <section className="text-white">
            <h4 className="text-xl">{company}</h4>
            <div className="flex">
                👨🏻‍💻
                <h6 className="pl-3 italic">
                    {" "}
                    {role} • {yearOfStart} - {yearOfLeaving}
                </h6>
            </div>

            <br />

            {children}
        </section>
    );
}

function Bullet({ achievement }: { achievement: Achievement }) {
    return <li className="mb-6 font-light">{achievement.bullet}</li>;
}

function BulletList({ bullets }: BulletList) {
    return (
        <ul className="list-disc">
            {bullets.map((bullet) => (
                <Bullet key={bullet.id} achievement={bullet} />
            ))}
        </ul>
    );
}

export default function Resume() {
    return (
        <>
            <Avatar />
            <Social />
            <Title width="300px" title="‣ Resume" />
        </>
    );
}
