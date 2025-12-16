import Demo from '~/components/demo'
import { LoginContainer } from '~/components/login'

export default function Home() {
  return (
    <div className="bg-bluuuu font-sans text-3xl">
      <Demo />
      <LoginContainer className="size-full" />
    </div>
  )
}
