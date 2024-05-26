import { useEffect } from "react"

import Select from "react-select"

export type Props = {
    options: { [key: string]: string }
    value: string
    className?: string
    onChange: (value: string) => void
}

export default function SelectWrapper({ options, value, onChange, className }: Props) {

    // define default value as first one
    useEffect(() => {
        if (!value)
            onChange(Object.keys(options)[0])
    }, [value, options, onChange])

    return (
        <Select
            className={`react-select-container ${className}`}
            classNamePrefix="react-select"
            onChange={({ value }) => onChange(value)}
            value={{
                value: value,
                label: options[value],
            }}
            isClearable={false}
            options={
                Object.entries(options).map(([key, name]) => ({
                    label: name,
                    value: key,
                }))
            }
        />
    )
}
