import {ButtonHTMLAttributes, InputHTMLAttributes} from "react";
import {FieldError, FieldErrorsImpl} from "react-hook-form";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{}

export interface IFieldProps {
    placeholder: string;
    error?: FieldError |  undefined;
}

type InputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends InputPropsField{};