import { avatar, name } from '@/components/info'
import Image from 'next/image'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import Icon from '@/components/Icon'
import Title from '@/components/Title'

export default function Home() {
  return (
    <>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={150}
          height={150}
          priority
        />
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

      <h2 className="text-white text-m leading-6 py-1">
        Hey! I am Jerson, a Dynamic Full Stack Engineer with four years of
        experience in fast-moving environments as a Product Engineer and
        semi-senior software engineer. I Demonstrated proficiency in Typescript,
        JavaScript ES6+, Nextjs, React, HTML5, MongoDB, and Nodejs. Profound
        knowledge of design principles, and UI/UX, including CSS Modules, Sass,
        Tailwind, and interactive development with framer-motion.{' '}
      </h2>
    </>
  )
}
