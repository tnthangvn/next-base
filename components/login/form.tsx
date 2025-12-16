'use client'

import { FC } from 'react'
import { useLoginForm, type LoginFormValues } from '~/hooks/form-login'

interface LoginFormProps {
  onSubmit: (data: LoginFormValues) => void
  className?: HTMLFormElement['className']
}

export const LoginForm: FC<LoginFormProps> = ({ onSubmit, className = '' }) => {
  const { register, handleSubmit, errors, isSubmitting } = useLoginForm(onSubmit)

  return (
    <form onSubmit={handleSubmit} className={['mx-auto max-w-md rounded-lg bg-white p-6 shadow-md', className].join(' ')}>
      <div className="mb-4">
        <label className="mb-1 block font-semibold">Email:</label>
        <input
          type="email"
          {...register('email')}
          placeholder="Enter your email"
          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label className="mb-1 block font-semibold text-gray-700">Password:</label>
        <input
          type="password"
          {...register('password')}
          placeholder="Enter your password"
          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 disabled:bg-blue-300"
      >
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}
