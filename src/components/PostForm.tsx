import React, { useEffect, useState } from 'react'
import Button from './Button';

const defaultFormValues = {
  title: '',
  body: '',
}

export interface PostFormProps {
  onSubmit: (values: typeof defaultFormValues) => void;
  clearOnSubmit?: boolean;
  initialValues?: typeof defaultFormValues;
  submitText: string;
}

export default function PostForm ({
  onSubmit,
  initialValues = defaultFormValues,
  submitText,
  clearOnSubmit,
}:PostFormProps) {
  const [values, setValues] = useState(initialValues)

  const setValue = (field: string, value: string) =>
    setValues((old) => ({ ...old, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    if (clearOnSubmit) {
      setValues(defaultFormValues)
    }
    e.preventDefault()
    onSubmit(values)
  }

  useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
      <div>
        <input
          className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
          type="text"
          name="title"
          value={values.title}
          onChange={(e) => setValue('title', e.target.value)}
          required
        />
      </div>
      <br />
      <label htmlFor="body" className="block text-sm font-medium text-gray-700">body</label>
      <div>
        <textarea
          className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
          name="body"
          value={values.body}
          onChange={(e) => setValue('body', e.target.value)}
          required
          rows={10}
        />
      </div>
      <br />
      <Button type="submit">{submitText}</Button>
    </form>
  )
}
