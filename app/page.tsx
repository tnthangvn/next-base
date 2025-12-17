import { FC } from 'react'

export interface HomeProps {
  children?: React.ReactNode
}

export const Home: FC<HomeProps> = ({ children }) => {
  return <div>{children}</div>
}

export default Home
