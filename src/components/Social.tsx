import Icon from "@/components/Icon";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Social() {
    return (
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400 text-white">
            <Icon url="https://twitter.com/leeerob" name="github">
                <GitHubIcon />
            </Icon>
            <Icon url="com" name="linkedIn">
                <LinkedInIcon />
            </Icon>
        </div>
    );
}
