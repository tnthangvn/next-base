'use client'

import { FC } from 'react'
import { LoginForm } from '~/components/login/form'
import { LoginFormValues } from '~/hooks/form-login'

export interface LoginContainerProps {
  className?: string
}

export const LoginContainer: FC<LoginContainerProps> = ({ className = '' }) => {
  const onSubmit = async (data: LoginFormValues) => {
    console.log({ data })
  }
  return <LoginForm className={className} onSubmit={onSubmit} />
}
