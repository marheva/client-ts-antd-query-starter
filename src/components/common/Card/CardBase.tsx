import React from 'react'
import { Card } from 'antd'
import { CardProps } from 'antd/lib/card'

const CardBase = ({
    children,
    noContent,
    ...props
}: React.PropsWithRef<CardBasePropsTypes & CardProps>): JSX.Element => {
    return (
        <Card {...props} >
            {!!children && children}
        </Card>
    )
}

export default CardBase
