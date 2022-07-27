import React from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import style from './style.module.scss';

import Field from '@/ui/FormElements/Field'

import { validEmail } from '@/shared/regexs'
import {IAuthInput} from "@/screens/Auth/auth.interface";

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<IAuthInput>
	isPasswordRequired?: boolean
}

const AuthFields: React.FC<IAuthFields> = ({
	isPasswordRequired = false,
	register,
	formState: { errors },
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: true,
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder="E-mail"
                error={errors.email}
			/>

            <Field
                {...register('password', isPasswordRequired ? {
					required: true,
                    minLength: {
                        value: 6,
                        message: 'min length 6',
                    },
                } : {})}
                type='password'
                placeholder="Password"
                error={errors.password}
            />

		</>
	)
}

export default AuthFields
