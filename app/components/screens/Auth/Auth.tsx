import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import AuthFields from '@/screens/Auth/AuthFields'
import { IAuthInput } from '@/screens/Auth/auth.interface'
import { UseAuthRedirect } from '@/screens/Auth/useAuthRedirect'

import Button from '@/ui/FormElements/Button'
import Heading from '@/ui/Heading/Heading'

import { useAuth } from '@/hooks/useAuth'

import MetaInfo from '@/utils/meta/MetaInfo'

import style from './style.module.scss'
import {useActions} from "@/hooks/useActions";

const Auth: React.FC = () => {
	// UseAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')


	const {register, login} = useActions()

	const {
		register: RegisterInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') {
			login(data)
		} else if (type === 'register') {
			register(data)
		}
		reset()
	}

	return (
		<>
			<MetaInfo title="Auth" />
			<section className={style.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />

					<AuthFields
						formState={formState}
						register={RegisterInput}
						isPasswordRequired
					/>

					<div className={style.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</>


	)
}

export default Auth
