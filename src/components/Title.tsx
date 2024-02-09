import styles from './title.module.css'

export default function Title({
  title,
  width,
}: {
  title: string
  width: string
}) {
  return (
    <div style={{ maxWidth: width, margin: 0 }}>
      <h1 className={[styles.typewriter].join('')}>{title}</h1>
    </div>
  )
}
