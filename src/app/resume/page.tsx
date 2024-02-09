import Avatar from "@/components/avatar";
import Social from "@/components/Social";
import Title from "@/components/Title";

const job = {
    company: "Figuro",
    role: "Lead Engineer",
    yearOfStart: "2021",
    yearOfLeaving: "2022",
    achievements: [
        {
            id: 1,
            bullet: "Since I assumed my role in 2021, I have executed critical decisions in the architecture and product design that resulted in the delivery of more than 20 versions of our technology and a diverse set of RestAPIs to optimize the sales process in our back-office.",
        },
        {
            id: 2,
            bullet: "Since I assumed my role in 2021, I have executed critical decisions in the architecture and product design that resulted in the delivery of more than 20 versions of our technology and a diverse set of RestAPIs to optimize the sales process in our back-office.",
        },
        {
            id: 3,
            bullet: "Since I assumed my role in 2021, I have executed critical decisions in the architecture and product design that resulted in the delivery of more than 20 versions of our technology and a diverse set of RestAPIs to optimize the sales process in our back-office.",
        },
        {
            id: 4,
            bullet: "Since I assumed my role in 2021, I have executed critical decisions in the architecture and product design that resulted in the delivery of more than 20 versions of our technology and a diverse set of RestAPIs to optimize the sales process in our back-office.",
        },
    ],
};

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
            <Job {...job}>
                <BulletList bullets={job.achievements} />
            </Job>
        </>
    );
}
